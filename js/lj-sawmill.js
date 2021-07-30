"use strict";function isValidEmailAddress(a){return/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(a)}$(document).ready(function(){$("header").backstretch("img/header-1.jpg"),$(".download").backstretch("img/download.jpg"),$(".quote-slider").backstretch("img/quote-2.jpg"),$("#contact-form").on("submit",function(a){a.preventDefault(),a.stopImmediatePropagation();var s=$("#contact-form .message"),e=$("input#contact-name"),t=$("input#contact-email"),i=$("input#contact-phone"),l=$("input#contact-company"),o=$("textarea#contact-message");""==e.val()||""==t.val()||""==o.val()?(s.stop(!0).html('<span class="error"><i class="ion-ios-close-outline"></i>Vul alle verplichte velden in</span>'),$("#contact-form").find("input[type=text],textarea").filter(function(){if(""==$(this).val())return a.preventDefault(),!0}).first().focus()):isValidEmailAddress(t.val())?$.ajax({type:"POST",url:"./php/send-contact.php",data:{contact_name:e.val(),contact_email:t.val(),contact_phone:i.val(),contact_company:l.val(),contact_message:o.val()},success:function(){s.addClass("success").html('<span class="success"><i class="ion-ios-checkmark-outline"></i>Het bericht is verzonden</span>'),e.val(""),t.val(""),i.val(""),l.val(""),o.val("")}}):(s.stop(!0).html('<span class="error"><i class="ion-ios-close-outline"></i>Foutieve email</span>'),t.focus())}),$("#trial-form").on("submit",function(a){a.preventDefault(),a.stopImmediatePropagation();var s=$("#trial .message"),e=$("input#trial-name"),t=$("input#trial-email");""==e.val()||""==t.val()?(s.stop(!0).html('<span class="error"><i class="ion-ios-close-outline"></i>Vul alle verplichte velden in</span>'),$("#trial-form").find("input[type=text],textarea").filter(function(){if(""==$(this).val())return a.preventDefault(),!0}).first().focus()):isValidEmailAddress(t.val())?$.ajax({type:"POST",url:"./php/send-trial.php",data:{trial_name:e.val(),trial_email:t.val()},success:function(){s.addClass("success").html('<span class="success"><i class="ion-ios-checkmark-outline"></i>Successfully signed for trial!</span>'),e.val(""),t.val("")}}):(s.stop(!0).html('<span class="error"><i class="ion-ios-close-outline"></i>Email address is not valid!</span>'),t.focus())}),$("#subscribe-form").on("submit",function(a){a.preventDefault(),a.stopImmediatePropagation();var s=$("#subscribe-form .message"),e=$("input#subscribe-name"),t=$("input#subscribe-email");""==e.val()||""==t.val()?(s.stop(!0).html('<span class="error"><i class="ion-ios-close-outline"></i>Fill all fields!</span>'),$("#subscribe-form").find("input[type=text],textarea").filter(function(){if(""==$(this).val())return a.preventDefault(),!0}).first().focus()):isValidEmailAddress(t.val())?$.ajax({type:"POST",url:"./php/send-subscribe.php",data:{subscribe_name:e.val(),subscribe_email:t.val()},success:function(){s.addClass("success").html('<span class="success"><i class="ion-ios-checkmark-outline"></i>Subscribed!</span>'),e.val(""),t.val("")}}):(s.stop(!0).html('<span class="error"><i class="ion-ios-close-outline"></i>Invalid email!</span>'),t.focus())}),jQuery.easing.def="easeInOutExpo",$(document).on("click",function(){$(".language-options").removeClass("active")}),$("a.language").on("click",function(a){a.stopPropagation(),$(".language-options").toggleClass("active")}),$(".menu > a").on("click",function(){$(".menu > ul").toggleClass("active")}),$(".clients-carousel").slick({autoplay:!1,autoplaySpeed:5e3,infinite:!1,dots:!0,arrows:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".quotes").slick({autoplay:!0,autoplaySpeed:5e3,infinite:!0,easing:"easeInOutExpo",dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}),$(window).on("scroll",function(){var a=$(this).scrollTop(),s=$(".top");a>0?(s.addClass("floating"),$(".language-options").removeClass("active")):s.removeClass("floating")}),$('a.scroll[href^="#"]').on("click",function(a){a.preventDefault();var s=this.hash;s=s.replace("#","");var e=$("#"+s),t=0;"header"!=s&&(t=79),$("html, body").stop().animate({scrollTop:e.offset().top-t},1e3,function(){window.location.hash="#"+s})})}),$(window).load(function(){$(".preloader").delay(250).fadeOut(500)});