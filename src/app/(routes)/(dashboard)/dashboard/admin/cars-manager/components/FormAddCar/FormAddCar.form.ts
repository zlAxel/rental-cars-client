import { z } from "zod"

export const formSchema = z.object({
  name        : z.string().min(2).max(50),
  cv          : z.number().min(50).max(1000),
  transmision : z.string().min(2).max(50),
  people      : z.number().min(1),
  photo       : z.string().min(2).max(100),
  engine      : z.string().min(2).max(50),
  type        : z.string().min(2).max(50),
  priceDay    : z.number().min(1),
  isPublish   : z.boolean(),
})