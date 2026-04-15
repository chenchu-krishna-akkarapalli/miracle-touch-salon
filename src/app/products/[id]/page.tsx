import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/config/constants';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Other products for "New Products"
  const newProducts = PRODUCTS.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] min-h-screen bg-black">
      <div className="flex flex-col items-center gap-[60px] md:gap-[100px]">
        {/* Product Detail Top Section */}
        <section className="w-full max-w-[997px] flex flex-col gap-[36px] items-start">
          <div className="w-full flex gap-[44px] items-start flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-[415px] h-[400px] md:h-[630px] flex-shrink-0 border border-[#c9a84c] rounded-[9px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-[25px] w-full md:w-[538px] flex-shrink-0">
              <div className="flex flex-col gap-[25px] text-white">
                <div className="flex items-center gap-[4px] text-[16px]">
                  <span className="font-playfair italic">Product</span>
                  <span className="font-playfair text-[#c9a84c] font-semibold">View</span>
                </div>
                
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-futura font-[600] text-[34px] leading-tight">
                    {product.name}
                  </h1>
                  <p className="font-futura font-[300] text-[20px] tracking-[-0.8px]">
                    {product.price}
                  </p>
                </div>

                <p className="font-futura font-[500] text-[16px] uppercase uppercase">
                  {product.name} Ã¢â‚¬â€œ Shampoo
                </p>

                <div className="flex flex-col gap-[10px] text-[16px] font-futura font-[300]">
                  <div className="flex items-start gap-[6px]">
                    <span className="font-[600] text-[12px] tracking-[1.32px] uppercase mt-[4px]">Categories:</span>
                    <span className="flex-1">{product.category}</span>
                  </div>
                  <div className="flex items-start gap-[6px]">
                    <span className="font-[600] text-[12px] tracking-[1.32px] uppercase mt-[4px]">Tag:</span>
                    <span className="flex-1">hair care, hair shampoo, haircare, keratine</span>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="flex flex-col gap-[20px] w-full">
                <div className="bg-white inline-flex items-center px-[10px] py-[5px] w-max">
                  <span className="font-playfair italic font-medium text-[16px] text-black">
                    Description
                  </span>
                </div>
                
                <div className="flex flex-col gap-[10px] text-white text-[16px] font-futura font-[300] leading-[1.469]">
                  <p className="font-[500] uppercase">{product.name} Ã¢â‚¬â€œ Shampoo</p>
                  <div className="flex flex-col gap-[4px]">
                    <p>Mask for the deep and long-lasting reconstruction of dry, damaged and brittle hair.</p>
                    <p>Ideal for use on dry, damaged and brittle hair, it is formulated with an active complex based on:</p>
                    <ul className="list-disc pl-[24px]">
                      <li>keratin</li>
                      <li>collagen</li>
                      <li>amino acids</li>
                      <li>mineral salts</li>
                    </ul>
                    <p>which, by restoring cellular cohesion, repairs and strengthens the hair fiber from the inside out, rebalances porosity by compacting the cuticle and improves the elasticity of the hair which immediately appears stronger, shinier and silkier.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="flex flex-col gap-[50px] w-full max-w-[726px] text-white text-[16px] font-futura font-[300]">
            {/* Step 1 */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-[400]">How to use:</h3>
              <div className="flex flex-col sm:flex-row gap-[13px] items-start">
                <p className="font-[400] w-[185px] flex-shrink-0">DRY AND DAMAGED HAIR :</p>
                <div className="leading-[1.469]">
                  <p>after using <span className="font-[400]">KERATINE SHAMPOO</span>, distribute on towel-dried hair. Massage and</p>
                  <p>Leave on for 5/10 minutes; then rinse and proceed with styling.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-[8px] items-start">
                <p className="font-[400] w-[155px] flex-shrink-0">VERY DAMAGED HAIR :</p>
                <div className="leading-[1.469] flex flex-col gap-[4px]">
                  <p>With its <span className="font-[400]">SLES-free formulation</span>, this gentle shampoo ensures optimum hydration and prepares the hair for the reconstruction treatment.</p>
                  <p>Ideal for use on <span className="font-[400]">brittle, dry and damaged hair</span>, it is formulated with an active complex containing</p>
                  <ul className="list-disc pl-[24px]">
                    <li>keratin</li>
                    <li>collagen</li>
                    <li>amino acids</li>
                    <li>mineral salts</li>
                  </ul>
                  <p>which, by repairing cellular cohesion, repairs and strengthens the hair fiber from the inside out.</p>
                  <p>It rebalances porosity, leaving the cuticle compact, and improves the elasticity of the hair, which is immediately stronger, shinier and silkier.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-[400]">How to use:</h3>
              <div className="flex flex-col sm:flex-row gap-[10px] items-start">
                <p className="font-[400] w-[165px] flex-shrink-0">DRY AND BRITTLE HAIR :</p>
                <div className="leading-[1.469]">
                  <p>after the <span className="font-[400]">KERATINE SHAMPOO</span>, distribute onto towel-dried hair. Massage in and out</p>
                  <p>leave on for 5/10 minutes, then rinse and style as desired.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-[8px] items-start">
                <p className="font-[400] w-[157px] flex-shrink-0">VERY DAMAGED HAIR ;</p>
                <div className="leading-[1.469]">
                  <p>apply at the end of the application time of <span className="font-[400]">KERATINE PLUS</span> using the overlapping technique; massage gently and leave on for 5/10 minutes. Lather, rinse and style as desired.</p>
                </div>
              </div>
              <div className="flex items-center gap-[8px]">
                <p className="font-[400] w-[54px]">Format:</p>
                <p className="leading-[1.469]">300 ml</p>
              </div>
            </div>
          </div>
        </section>

        {/* New Products Section */}
        <section className="w-full flex flex-col items-center gap-[50px]">
          <h2 className="flex items-center gap-[9px] text-[32px]">
            <span className="font-playfair font-semibold text-[#c9a84c]">New</span>
            <span className="font-playfair italic text-white">Products</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[30px] w-full">
            {newProducts.map((p) => (
              <Link href={`/products/${p.id}`} key={p.id} className="flex flex-col items-center w-full group cursor-pointer">
                <div className="relative w-full aspect-square border border-[#c9a84c] rounded-[9px] overflow-hidden mb-[25px]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center text-center max-w-[245px] font-futura">
                  <p className="text-white text-[12px] font-[300] mb-[10px]">
                    {p.category}
                  </p>
                  <p className="text-white text-[20px] font-[600] mb-[10px]">
                    {p.name}
                  </p>
                  <p className="text-[#c9a84c] text-[12px] font-[300] tracking-[-0.48px]">
                    {p.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
