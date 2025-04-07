import { z } from "zod";

const messageSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export const validateMessage = (data: z.infer<typeof messageSchema>) => {
  return messageSchema.safeParse(data);
};
