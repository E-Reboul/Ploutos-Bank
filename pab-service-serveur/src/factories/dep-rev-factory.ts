import { DepRev } from "../interfaces/dep-rev-interface";
import { DepRevClass } from "../Entities/dep-rev-entity";
import { Request, Response } from "express"
export class DepRevFactory {
  static exportDepRev = (req: Request, res:Response) => {
    const data: DepRev = DepRevFactory2.createDepRev(req.body.type)
    return data;
  }
}

export class DepRevFactory2 {

  static createDepRev(type: string) {
    const newUser = DepRevClass.getInstance()
    newUser.setType(type)
    return newUser;
  }
}

