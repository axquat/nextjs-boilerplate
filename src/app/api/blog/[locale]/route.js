import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const { data } = await supabase.from('blog').select("*").filter("lang", "eq", params.locale);
  return NextResponse.json(data)
}

