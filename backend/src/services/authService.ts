import prisma from '~/src/utils/prisma'
import { User } from '~/src/models/User'
import bcryptjs from 'bcryptjs';
import { RegisterUserDTO } from '../DTOs/RegisterUser.dto';

export const registerUser = async (userData: RegisterUserDTO) => {
    const hashedPassword = await bcryptjs.hash(userData.password, 10);

    try {
        const existingUser = await prisma.user.findUnique({
          where: { email: userData.email },
        })
    
        if (existingUser) {
          throw new Error('Email already in use')
        }
    
        const user = await prisma.user.create({
          data: {
            email: userData.email,
            first_name: userData.firstName,
            last_name: userData.lastName,
            address: userData.address,
            phone_number: userData.phoneNumber,
            password_hash: hashedPassword,
          },
        })
    
        return new User(user)
      } catch (error) {
        throw new Error('Error creating user')
      }
}