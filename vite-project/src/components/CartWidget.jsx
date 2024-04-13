import { ShoppingCartOutlined } from '@ant-design/icons';
function CartWidget() {

    return (
        <div><ShoppingCartOutlined className="text-2xl text-black" />
            <span className="ml-1">0</span>
        </div>
    )
}

export default CartWidget;