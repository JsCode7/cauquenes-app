import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { dbConnect } from "@/app/utils/dbConnect";
import Places from "@/app/models/Place";
import { redirect } from "next/navigation";

export async function POST() {
  const headersList = headers();
  try {
    if (headersList.get("x-api-key") == process.env.API_KEY) {
        await dbConnect();
        const response: any[] = await Places.find();
        const services = response.filter((service) =>
            service.types.includes("cemetery" || "gas_station" || "church")
        );

        return NextResponse.json({
            services: services,
            message: "Se han recuperado los parques exitosamente",
        });
    } else {
      return NextResponse.json({
        message: "No tienes permisos para acceder a esta información",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Ha ocurrido un error al recuperar los lugares",
    });
  }
}

export function GET() {
  return redirect("/");
}
