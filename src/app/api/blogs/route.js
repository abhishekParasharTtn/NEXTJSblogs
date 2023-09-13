import { NextResponse } from "next/server";
import { dbConnect } from "../../../config/dbConnect";
import Blog from "../../../models/blogModel";
dbConnect();
export async function GET() {
  try {
    const blogs = await Blog.find();
    return NextResponse.json({
      data: blogs,
      message: "Blog Added Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    await Blog.create(reqBody);
    return NextResponse.json({
      message: "Blog Added Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
