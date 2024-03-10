
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prisma";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { userId } = auth();

    const studentId = userId;
    const { teacherId } = body;
    if (!teacherId) {
        return new NextResponse("Name is required", { status: 400 });
    }

    if (!userId) {
        return new NextResponse("Skill is required", { status: 400 });
    }

    const booking = await prismadb.bookings.create({
        data: {
            teacherId,
            studentId: userId!, // Add '!' to assert that userId is not null
        },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[BOOKING_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const booking = await prismadb.bookings.findMany();

    return NextResponse.json(booking);
  } catch (error) {
    console.log("[BOOKING_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


