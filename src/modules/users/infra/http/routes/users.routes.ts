import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UserController from '../controllers/UserControllers';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig.multer);
const userController = new UserController();
const userAvatarController = new UserAvatarController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
