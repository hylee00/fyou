$(function(){
    $('.kor').click(function(){
        $('.lang_list').slideToggle();
    })

    // gnb마우스영역에 왔을때 on클래스  추가
    
    $('.gnb').mouseenter(function(){
        $('#header').addClass('on');
        $('#header .gnb_bg,#header .depth2').stop().slideDown(200);
    });

    $('.gnb').mouseleave(function(){
        $('#header').removeClass('on');
        $('#header .gnb_bg,#header .depth2').stop().slideUp(200);
    })

    // 동영상 슬라이드
    const myswiper = new Swiper('.video_slider', {
        // Optional parameters
        // direction: 'horizontal',
        effect: 'fade', // 페이드인아웃효과
        loop: false, //반복안함
        autoplay: true, //자동실행
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      // scroll다운buton을 클릭할때 section1위치를 스크롤바로 이동
      $('.btn_scroll').click(function(){
        console.log("클릭");
        let sect1Loc = $('.section1').offset().top;
        console.log(sect1Loc);
        $('body,html').animate({'scrollTop':sect1Loc});
      })

      // section1의 아이콘 hover구현

      $('#main .section1 ul li').mouseenter(function(){
        $(this).addClass('on').find('a').parent().siblings().find('a').css({'filter':'brightness(40%)'});
      })
      $('#main .section1 ul li').mouseleave(function(){
        $(this).removeClass('on').find('a').parent().siblings().find('a').css({'filter':'brightness(100%)'});;
      })

      // section1의 초록색박스 애니메이션
      //스크롤바의 이벤트가 발생했을때
      $(window).scroll(function(){
        //현재 스크롤바의 위치
        let pos = $(window).scrollTop();
        console.log(pos);

        //section1_wrap의 위치
        let sec1 = $('.section1_wrap').offset().top;
        console.log(sec1);

        //section2의 위치
        let sec2 = $('.section2').offset().top;
        console.log(sec2);

        if(sec2 <= pos+600){
          $('.section2').addClass('on');
        }


        if(sec1 <= pos+600){
          $('.section1_wrap').addClass('on');
        }






      })

      // 공지사항 슬라이드 오른쪽 박스
      const myswiper2 = new Swiper('.new_slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type:'fraction'
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints:{
          320:{
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          758:{
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
        },
      });

      $('.list').hide();
      // 패밀리 버튼을 클릭했을 때
      $('.btn_family').click(function(){
        $(this).toggleClass('on');
        $('.list').stop().slideToggle();
      })

      // 모바일 메뉴 버튼을 클릭했을때 메뉴 보이기
      $('.m_btn').click(function(){
        $('.m_gnb_wrap').addClass('on');
      })
      $('.m_close').click(function(){
        $('.m_gnb_wrap').removeClass('on');
      })

      // 모바일 메뉴의 1차 버튼을 클릭하면 2차 메뉴가 나오게 하기
      $('.m_gnb>li').click(function(){
        $(this).toggleClass('on');
        $(this).find('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp().removeClass('on');
      })

});