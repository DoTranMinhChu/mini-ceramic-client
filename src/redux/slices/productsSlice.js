import { createSlice } from '@reduxjs/toolkit';


export default createSlice({
    name: 'productList',
    initialState: [
        {
            _id: 1,
            name: 'Mil ceramic mug',
            price: 20,
            descriptions: 'Mil ceramic mug good',
            image: 'https://www.westelm.ae/sites/g/files/bndsjb1101/files/styles/product_zoom_large_800x800/public/media/als-ecom-pimswes-prod-s3/assets/GroupProductImages/mill-ceramic-mugs-set-of-4-e2765/202112_0130_mill-ceramic-mugs-z.135985.jpg?itok=n8y0OBEC'
        },
        {
            _id: 2,
            name: 'Ceramic Pitcher',
            price: 150,
            descriptions: 'Ceramic Pitcher from Guerrieri Murano, 1950s',
            image: 'https://cdn20.pamono.com/p/g/5/0/501252_o8022okzio/ceramic-pitcher-from-guerrieri-murano-1950s-1.jpg'
        },
        {
            _id: 3,
            name: 'Vintage style Ceramic Tea Set',
            price: 42,
            descriptions: 'Vintage style Ceramic Tea Set, Teapots -Traditional Handicraft Bat Trang-VietNam',
            image: 'https://m.media-amazon.com/images/I/71l1X4D-7pL._AC_SX569_.jpg'
        }
    ],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload);
        }
    }
})

