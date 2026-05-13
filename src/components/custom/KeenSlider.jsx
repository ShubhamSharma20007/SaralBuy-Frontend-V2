import { dateFormatter } from '@/utils/dateFormatter';
import { mergeName } from '@/utils/mergerName';

const KeenSlider = ({ product, target }) => {
  product = product.product || product || {};
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .keen-slider__slide {
          min-width: 100% !important;
        }
        }
      `}</style>
      <div
        className={`w-full  border-r-2 border-gray-200 p-2 b shadow-sm  ${target === 'requirements' ? 'cursor-pointer' : ''}`}
      >
        <div className="flex-col sm:flex-row flex gap-6 sm:pl-12 items-center sm:mt-0 mt-2">
          <div className="w-24 h-24 flex-shrink-0 sm:block hidden">
            <img
              src={product.image || '/no-image.webp'}
              alt={product.name}
              className="w-full h-full object-contain rounded-md mix-blend-darken"
            />
          </div>
          <div className="flex flex-col justify-between text-sm">
            <div>
              <span className="cc">{product?.categoryId?.categoryName}</span>
            </div>
            <p className="flex gap-1 item-center">
              Product:{' '}
              <strong className="capitalize line-clamp-1 font-semibold">{product.title}</strong>
            </p>
            {product?.buyerId && (
              <p className="flex gap-1 item-center">
                Delivery By:{' '}
                <strong className="capitalize">
                  {mergeName(product?.buyerId) ||
                    dateFormatter(product?.paymentAndDelivery?.ex_deliveryDate) ||
                    'N/A'}
                </strong>
              </p>
            )}

            <p className="flex gap-1 item-center">
              QTY: <strong>{product.quantity || 0}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeenSlider;
