import type { Track } from "@/engine/content/types";
import { drivingAutomationLevels } from "./01-driving-automation-levels";
import { level4InJapan } from "./02-level-4-in-japan";
import { robotaxisAbroad } from "./03-robotaxis-abroad";
import { deliveryRobotsAndDrones } from "./04-delivery-robots-and-drones";
import { robotsAndAi } from "./05-robots-and-ai";
import { accidentsAndResponsibility } from "./06-accidents-and-responsibility";

export const selfDrivingAndRobotsTrack: Track = {
  id: "self-driving-and-robots",
  emoji: "🚗",
  title: {
    ja: "自動運転とロボット",
    en: "Self-Driving Cars and Robots",
  },
  summary: {
    ja: "道路を走り、歩道や空を進み、ものをつかむAI。自動運転のレベルと日本の制度、限られた場所で始まったレベル4、海外のロボタクシーの広がりと止まった例、配送ロボットとドローンのルール、言葉で動かすロボットの研究、事故の責任と原因の調べ方。",
    en: "AI that drives on roads, moves along sidewalks and through the sky, and grasps objects: the levels of driving automation and Japan's rules, Level 4 starting in limited areas, robotaxis abroad and a service that was stopped, rules for delivery robots and drones, research on robots you can instruct in words, and how responsibility and accident investigation work.",
  },
  // From the vocabulary every later lesson relies on (levels), through Japan and abroad, to other machines that move
  // among people (delivery robots, drones, robot arms), closing with who answers when something goes wrong.
  lessons: [
    drivingAutomationLevels,
    level4InJapan,
    robotaxisAbroad,
    deliveryRobotsAndDrones,
    robotsAndAi,
    accidentsAndResponsibility,
  ],
};
