import { z } from 'zod';
import { MemberRole } from '../models/SHGMember';

export const createSHGMemberSchema = z.object({
  shgId: z.string().min(1, { message: 'SHG ID is required' }),
  name: z.string().min(1, { message: 'Member name is required' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  role: z.nativeEnum(MemberRole, { message: 'Invalid member role' }),
  aadharCardFront: z.string().min(1, { message: 'Aadhar card front is required' }),
  aadharCardBack: z.string().min(1, { message: 'Aadhar card back is required' }),
  panCard: z.string().min(1, { message: 'PAN card is required' }),
  voidIdCard: z.string().min(1, { message: 'Void ID card is required' }),
  homeRentalAgreement: z.string().optional(),
});

export const updateSHGMemberSchema = createSHGMemberSchema.partial().omit({ shgId: true });

export const shgMemberIdSchema = z.object({
  id: z.string().min(1, { message: 'Member ID is required' }),
});

export type CreateSHGMemberInput = z.infer<typeof createSHGMemberSchema>;
export type UpdateSHGMemberInput = z.infer<typeof updateSHGMemberSchema>;
export type SHGMemberIdInput = z.infer<typeof shgMemberIdSchema>;

