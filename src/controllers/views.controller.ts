import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import template from '@views/template.marko';

export class ViewsController {
  public user = Container.get(UserService);

  public getIndex = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.marko(template);
    // res.marko(template, {
    //   name: 'Frank',
    //   count: 30,
    //   colors: ['red', 'green', 'blue'],
    // });
  };
}
