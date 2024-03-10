
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name } = body;


    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const teacher = await prismadb.student.create({
      data: {
        userId,
        name,
      },
    });

    return NextResponse.json(teacher);
  } catch (error) {
    console.log("[STUDENT_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const teachers = await prismadb.student.findMany();

    return NextResponse.json(teachers);
  } catch (error) {
    console.log("[STUDENT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


