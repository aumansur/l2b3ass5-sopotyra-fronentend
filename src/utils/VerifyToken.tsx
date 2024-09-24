import { JwtPayload } from "jwt-decode";

// Define the structure of your JWT payload
interface CustomJwtPayload extends JwtPayload {
  role?: string; // Add other properties if needed
}
import { jwtDecode } from "jwt-decode";

export const VerifyToken = (token: string) => {
  return jwtDecode<CustomJwtPayload>(token);
};
