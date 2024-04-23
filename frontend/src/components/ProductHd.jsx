
import {TbArrowRight} from 'react-icons/tb'


function ProductHd(props) {
    const {product} = props
  return (
    <div className='flex items-center flex-wrap medium-16 my-4 capitalize'>
        Home<TbArrowRight/>Shop<TbArrowRight/>{product.category}<TbArrowRight/>{product.name}
    </div>
  )
}

export default ProductHd