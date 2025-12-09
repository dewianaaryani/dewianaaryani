import { supabase } from "@/lib/supabase";

export async function getSignedUrl() {
  const list = await supabase.storage.from("image").list("", { limit: 100 });
  console.log("FILES IN BUCKET:", list.data);

  const file = list.data?.[0]?.name; // ambil nama file pertama (sementara buat testing)
  if (!file) return null;

  const { data, error } = await supabase.storage
    .from("image")
    .createSignedUrl(file, 3600);

  if (error) {
    console.error("Signed URL Error:", error);
    return null;
  }

  return data.signedUrl;
}
