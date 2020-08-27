import { Request, Response } from 'express';
import { promisify } from 'util';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './entity/User';

export const saveUser = async (req: Request, res: Response) => {
  const { username, email, senha } = req.body;

  try {
      const senhaHash = await bcrypt.hash(senha, 8);
      
      const user = await getRepository(User).save({
          nome,
          email,
          senha: senhaHash
      });
      
      const token_register = jwt.sign({ nome }, process.env.SECRET, {
          expiresIn: '1d'
      });

      const data = {
          id: user.id,
          nome: user.nome,
          email: user.email,
          token: token_register
      }
      
      return res.status(201).json(data);

  } catch (error) {
      return res.status(402).json({message: "erro user controller"})
  }
}


module.exports = {
  async getUserById(call, callback) {
    const { id } = call.request;

    const user = await User.findById(id);

    if (!user) {
      return callback(null, { error: 'User not found' });
    }

    return callback(null, {
      user: { ...user.toObject(), id: user._id, password: undefined },
    });
  },

  async registerUser(call, callback) {
    const { email, username, password } = call.request.user;

    const user = await User.create({ email, username, password });

    return callback(null, { user: { ...user.toObject(), id: user._id } });
  },

  async loginUser(call, callback) {
    const { email, password } = call.request.user;

    const user = await User.findOne({ email });

    if (!user) {
      return callback(null, { error: 'User not found' });
    }

    if (!(await user.compareHash(password))) {
      return callback(null, { error: 'Invalid password' });
    }

    const token = User.generateToken(user);

    return callback(null, {
      token,
    });
  },
  async authenticate(call, callback) {
    const { token: fullToken } = call.request;

    if (!fullToken) {
      callback(null, { error: 'No token provided' });
    }

    const parts = fullToken.split(' ');

    if (!parts.length === 2) {
      return callback(null, { error: 'Token error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return callback(null, { error: 'Token malformatted' });
    }

    try {
      const decoded = await promisify(jwt.verify)(token, 'Rodz & Higo');

      const user = await User.findById(decoded.id);

      return callback(null, { user: { ...user.toObject(), id: user._id } });
    } catch (err) {
      return callback(null, { error: 'Token invalid' });
    }
  },
};