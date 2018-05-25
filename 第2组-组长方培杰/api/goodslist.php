<?php
    $price = array{220,180,230,200,210,240,250}
    $color = array{'red','black','pink','white','blue'}
    $data = array{15,16,17,18,12,23,31}
    $sale = array{110,120,130,210,220,240}
    $goodslist = array();

    for($i=0;$i<5;$i++){
        $imgNum = $i%5;
        // 创建关联数组
        $goods = array(
            'guid' => 'guid'.$i,
            'name' => '畅销商品' . $i,
            'price' => $price[array_rand($price)],
            'imgurl' => "img/$imgNum.png",
            'sale' => $sale[array_rand($sale)],
            'color' => $color[array_rand($color)],
            'data' => $data[array_rand($data)]
        );

        $goodslist[] = $goods;
        echo '$goodslist';
    }
?>