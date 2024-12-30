
import { useEffect } from 'react';

import $ from 'jquery';



export default function App() {

  useEffect(() => {
    //移入=>mouseover()
    //移出=>mouseout()
    //移動=>mousemove()
    //xy座標=>pagex pageY  
    //取得html內容=>html()
    //淡入=>fadeIn()
    //淡出=>fadeOut()
    //速度=>毫秒=>(slow,normal,fast)
    //尋找指定的名稱=>has()
    //新增html元素=>append()
    //取得子元素=>children()

/*
    $('a:has(.ttpShow)').on('mouseover',function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.tppShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX) + 'px'
      }).fadeIn('fast');

    }).on('mouseout',(function () {
      $('#ttpPanel').remove();
    }).on('mousemove',(function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX) + 'px'
      });
    })

*/














    $('a:has(.ttpShow)').mouseover(function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.tppShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX) + 'px'
      }).fadeIn('fast');

    }).mouseout(function (e) {
      $('#ttpPanel').remove();
    }).mousemove(function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX) + 'px'
      });
    })


  }, [])


  return (
    <>
      <h2>tooltip顯示說明</h2>
      <p>Lorem ipsum dolor sit amet
        <a href="#">consectetur
          <span className='ttpShow'>consectetur內容說明...
          </span>
        </a>
        adipisicing elit. Voluptates aperiam amet veniam repellendus cum delectus similique. Alias eos beatae totam accusantium optio quasi? Voluptas, autem. Asperiores quae impedit quis adipisci, fuga magnam est ullam nostrum itaque, eaque modi provident tenetur! Accusamus nemo aut omnis cum, doloremque quidem facilis pariatur sed velit, debitis fugit quisquam at qui quos voluptate impedit. Aliquid illum nihil itaque non, repellat eum perferendis, facere porro iusto quasi asperiores deserunt dignissimos accusamus, fugit eius ipsa id velit? Error laborum officiis illum
        <a href="#">
          illum
          <span className='ttpShow'>
            <img src="./images/03.jpg" alt="" style={{
              width: '100px'
            }} />
          </span>
        </a>
        fuga, quis natus similique sequi tenetur quo delectus, possimus a repellendus molestias, corrupti aperiam inventore quisquam aliquam pariatur! Corrupti nemo facere illum repudiandae doloremque minus, ipsa quis aliquid atque ad dolor veritatis animi, eos asperiores omnis aliquam rem labore sint laborum est cum velit. Commodi laudantium minima rerum vero eligendi neque nisi, quo vitae exercitationem fugiat praesentium mollitia. Dolorum, quo consectetur! Sit ipsa earum alias itaque velit facilis doloribus voluptatum, repellat minima inventore, sint molestias doloremque delectus, quam illum architecto. Quas praesentium at eligendi sint nam doloribus architecto illum dolorem fugit, nostrum debitis non nihil quod fuga ab cupiditate, nisi error fugiat soluta illo? Sapiente exercitationem ipsa animi, aspernatur perspiciatis laborum esse, tempore fugit fugiat possimus iste, deserunt nesciunt nostrum vel consequatur voluptatem? Error molestiae aspernatur blanditiis, laborum reprehenderit in quaerat dolor? Voluptatum rerum sit voluptate, ea commodi optio! Odit inventore placeat quisquam neque officiis! Quidem, voluptatibus! Consequuntur est asperiores animi at unde, qui quasi amet. Error officia beatae laborum, corporis ad praesentium ipsum, numquam odit aut asperiores dolore, ratione perspiciatis animi magnam dolores voluptas illum laudantium est quibusdam optio placeat commodi facilis reiciendis. Corrupti eaque architecto nemo excepturi. Hic in error iusto totam nihil, corporis officiis perspiciatis explicabo saepe cumque quidem aliquam quo, cupiditate ratione numquam enim, culpa harum laboriosam vero alias soluta. Ad nisi ut nemo mollitia, ullam accusantium error fuga aperiam excepturi eius. Necessitatibus harum magni veniam fugit perspiciatis cupiditate corporis repellat sequi laboriosam repellendus tempore, alias inventore architecto expedita consectetur esse! Ut doloremque nihil consequuntur id sapiente culpa eos repellat, deleniti dolores cupiditate voluptatibus sint blanditiis possimus similique eligendi neque amet natus eaque pariatur. Quidem debitis porro iure, officiis quas non tempore quis laborum ex voluptate necessitatibus nesciunt doloribus? Ratione quia iste temporibus culpa molestiae doloribus rerum sapiente amet dolores, dolorem sint corrupti assumenda fugit magni voluptate voluptatibus sunt! Voluptatum beatae iure dolores nisi, non quisquam vero temporibus ratione sunt unde aperiam excepturi veritatis odio officia dolore sequi, corporis voluptas nam, voluptates ex illo? At ad corrupti neque iure reprehenderit eius rem ipsa ut cumque? Ad incidunt, labore cumque alias quia fugit voluptatibus reiciendis beatae. Culpa obcaecati commodi temporibus tempore odio provident sint, impedit ad iure vitae suscipit voluptatem voluptates harum, eum eius odit magnam. Sint voluptatem, sequi illo placeat sapiente omnis labore possimus. Illo aut at asperiores laboriosam quae aperiam tenetur veritatis quasi, sunt ab libero, optio ut illum? Maxime placeat expedita perferendis id. Illum quam similique ratione et nesciunt repudiandae molestiae dolor quas asperiores, velit doloribus sapiente, numquam, odio corrupti.</p>
    </>
  )
}