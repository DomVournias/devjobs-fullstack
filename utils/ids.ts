import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

export function generateUuid() {
  const uuid = uuidv4();

  return uuid;
}

export function generateShortUuid() {
  // Generate a standard UUID
  const uuid = uuidv4();

  // Use a cryptographic hash function to create a shorter hash
  const hash = crypto.createHash("sha256").update(uuid).digest("hex");

  // Take the first 5 characters of the hash as the short UUID
  const shortUuid = hash.substring(0, 5);

  return shortUuid;
}
