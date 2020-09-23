import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { AuthRequest } from "../interfaces/request.interface";
import { IntegrationService } from "../services/integration";

export async function get(_event: APIGatewayProxyEvent, _context: Context) {
  const service = new IntegrationService();

  const authRequest: AuthRequest = {
    appId: "acc8b796-04a0-4f4f-b6a4-924d1ca4c27b",
    appPassword: "password",    
    platformUser: "78312444582@mailinator.com",
  };

  const data = await service.auth(authRequest);

  return {
    headers: { "Content-Type": "application/json" },
    statusCode: 200,
    body: JSON.stringify(data, null, 2)
  };
}