import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="logo">
        <Image
          src="/ngawii.png" // Path ke file logo
          alt=""
          width={200} // Sesuaikan lebar sesuai kebutuhan
          height={100} // Sesuaikan tinggi sesuai kebutuhan
        />
      </div>
      <h1>Pusat Layanan General Kontraktor</h1>
      <p>SEJAK TAHUN 2003</p>
      <p>Kami menyediakan jasa layanan konstruksi bangunan. Temukan disini semua kebutuhan kontruksi bangunan Anda.
      Semua penawaran dapat dinegosiasikan.</p>
      <p>Your success is our commitment.</p>
      {/* Tambahkan elemen lain di sini */}
    </section>
    
  );
}
