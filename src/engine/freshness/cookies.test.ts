// @vitest-environment node
import { describe, expect, it } from "vitest";
import { CookieJar } from "./cookies";

describe("CookieJar", () => {
  it("sends back what a host set, ignoring the attributes", () => {
    const jar = new CookieJar();
    jar.store("https://a.example/page", ["seen=1; Path=/; Secure; HttpOnly", "lang=ja; Max-Age=3600"]);
    expect(jar.headerFor("https://a.example/other")).toBe("seen=1; lang=ja");
  });

  it("keeps a host-only cookie to that host: not another host, not even a subdomain", () => {
    const jar = new CookieJar();
    jar.store("https://a.example/page", ["seen=1"]);
    expect(jar.headerFor("https://b.example/signin")).toBeUndefined();
    expect(jar.headerFor("https://sub.a.example/")).toBeUndefined();
    expect(jar.headerFor("http://A.example:8080/page")).toBe("seen=1");
  });

  it("sends a Domain cookie to that domain and its subdomains, which is how a sign-in host sets cookies for www", () => {
    const jar = new CookieJar();
    jar.store("https://idp.nature.example/transit", ["session=abc; Domain=.nature.example; Path=/; Secure"]);
    expect(jar.headerFor("https://www.nature.example/articles/1")).toBe("session=abc");
    expect(jar.headerFor("https://nature.example/")).toBe("session=abc");
    expect(jar.headerFor("https://idp.nature.example/")).toBe("session=abc");
    expect(jar.headerFor("https://notnature.example/")).toBeUndefined();
  });

  it("accepts the Domain attribute without a leading dot and in any case", () => {
    const jar = new CookieJar();
    jar.store("https://www.a.example/", ["x=1; domain=A.Example"]);
    expect(jar.headerFor("https://api.a.example/")).toBe("x=1");
  });

  it("drops a cookie whose Domain does not cover the host that set it, and treats an empty Domain as host-only", () => {
    const jar = new CookieJar();
    jar.store("https://a.example/", ["x=1; Domain=b.example", "y=2; Domain=", "z=3; Domain=other.a.example"]);
    expect(jar.headerFor("https://b.example/")).toBeUndefined();
    expect(jar.headerFor("https://other.a.example/")).toBeUndefined();
    expect(jar.headerFor("https://a.example/")).toBe("y=2");
  });

  it("lets a later cookie of the same name and scope replace the earlier one", () => {
    const jar = new CookieJar();
    jar.store("https://a.example/", ["state=first"]);
    jar.store("https://a.example/", ["state=second", "other = spaced "]);
    expect(jar.headerFor("https://a.example/")).toBe("state=second; other=spaced");
  });

  it("skips malformed Set-Cookie values and keeps an empty value", () => {
    const jar = new CookieJar();
    jar.store("https://a.example/", ["garbage", "=anonymous", "cleared=; Max-Age=0"]);
    expect(jar.headerFor("https://a.example/")).toBe("cleared=");
    const empty = new CookieJar();
    empty.store("https://a.example/", []);
    expect(empty.headerFor("https://a.example/")).toBeUndefined();
  });
});
