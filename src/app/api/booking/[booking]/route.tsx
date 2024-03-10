
import { NextResponse } from "next/server";

import prismadb from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function GET(
  req: Request,
  { params }: { params: { teacherId: string } },
) {
  try {
    const booking = await prismadb.bookings.findUnique({
      where: {
        id: params.teacherId,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[BOOKING_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { teacherId: string } },
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.teacherId) {
      return new NextResponse("teacher id is required", { status: 400 });
    }

    const booking = await prismadb.bookings.delete({
      where: {
        id: params.teacherId,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[TEACHER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { teacherId: string } },
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

    if (!params.teacherId) {
      return new NextResponse("teacher id is required", { status: 400 });
    }

    const teacher = await prismadb.teacher.update({
      where: {
        id: params.teacherId,
      },
      data: {
        name,
        skill,
      },
    });

    return NextResponse.json(teacher);
  } catch (error) {
    console.log("[TEACHER_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
