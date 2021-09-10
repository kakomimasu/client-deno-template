import { Algorithm } from "https://raw.githubusercontent.com/kakomimasu/client-deno/v1.0.0-beta.0/algorithm.js";

export class Sample extends Algorithm {
  onInit(boardPoints, agentNum, turnNum) {
  }

  onTurn(field, pid, agents, turn) {
    return [];
  }
}

if (import.meta.main) {
  const a = new Sample();
  a.match();
}
