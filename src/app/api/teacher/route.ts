import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, skill, description } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!skill) {
      return new NextResponse("Skill is required", { status: 400 });
    }

    const teacher = await prismadb.teacher.create({
      data: {
        userId,
        name,
        skill,
        description,
      },
    });

    return NextResponse.json(teacher);
  } catch (error) {
    console.log("[TEACHERS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const teachers = await prismadb.teacher.findMany();

    return NextResponse.json(teachers);
  } catch (error) {
    console.log("[TEACHERS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


