import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing!");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "7fea6c2952dff5403e6a076a575ca2e7"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findbyid(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    return next();
  } catch {
    throw new Error("Invalid token!");
  }
}
