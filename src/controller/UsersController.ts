import { Response, Request } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const {email}  = request.body;

    const usersService = new UsersService();

    const user = await usersService.create(email);

    return response.json(user);
  }

  async showByEmail(request: Request, response: Response) {
    const { email } = request.params;

    const messagesService = new UsersService();

    const list = await messagesService.findByEmail(email);

    return response.json(list);
  }
};

export { UsersController };
