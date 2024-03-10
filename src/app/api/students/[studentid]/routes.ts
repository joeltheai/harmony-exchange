
import { NextResponse } from "next/server";

import prismadb from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function GET(
  req: Request,
  { params }: { params: { studentid: string } },
) {
  try {
    const student = await prismadb.teacher.findUnique({
      where: {
        id: params.studentid,
      },
    });

    return NextResponse.json(student);
  } catch (error) {
    console.log("[TEACHER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { studentid: string } },
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.studentid) {
      return new NextResponse("teacher id is required", { status: 400 });
    }

    const student = await prismadb.teacher.delete({
      where: {
        id: params.studentid,
      },
    });

    return NextResponse.json(student);
  } catch (error) {
    console.log("[TEACHER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { studentid: string } },
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, skill } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!skill) {
      return new NextResponse("skill is required", { status: 400 });
    }

    if (!params.studentid) {
      return new NextResponse("teacher id is required", { status: 400 });
    }

    const student = await prismadb.student.update({
      where: {
        id: params.studentid,
      },
      data: {
        name,
        
      },
    });

    return NextResponse.json(student);
  } catch (error) {
    console.log("[STUDENT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
