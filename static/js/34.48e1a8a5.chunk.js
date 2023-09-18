"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[34],{9848:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var i,r,s,o,l,a,d,h,u=t(4270),c=t(5984),x=t(9434),p=t(9273),Z=t(168),k=t(7686),g=k.Z.form(i||(i=(0,Z.Z)(["\n  padding: 15px;\n  width: 500px;\n  border: 2px solid #fe6b53;\n  border-radius: 5px;\n  margin: 0 auto 25px auto;\n"]))),m=k.Z.label(r||(r=(0,Z.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  color: #fe6b53;\n  user-select: none;\n"]))),b=k.Z.input(s||(s=(0,Z.Z)(["\n  display: block;\n  height: 25px;\n  width: 70%;\n  padding: 2px 5px;\n  border: 1px solid #bdbdbd;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  color: #fe6b53;\n\n  ::placeholder {\n    color: #bdbdbd;\n  }\n\n  :focus {\n    outline: none;\n    border: 1px solid #fe6b53;\n  }\n"]))),f=k.Z.button(o||(o=(0,Z.Z)(["\n  display: block;\n  margin-left: 150px;\n  height: 25px;\n  &:hover,\n  &:focus {\n    background-color: #1976d2;\n    color: #000;\n  }\n"]))),E=t(3329),R=function(){var e=(0,x.I0)(),n=(0,c.x0)(),t=(0,c.x0)(),i=(0,c.x0)();return(0,E.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,p.z2)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},autoComplete:"off",children:[(0,E.jsx)(m,{htmlFor:n,children:"Username"}),(0,E.jsx)(b,{id:n,type:"text",name:"name"}),(0,E.jsx)(m,{htmlFor:t,children:"Email"}),(0,E.jsx)(b,{id:t,type:"email",name:"email"}),(0,E.jsx)(m,{htmlFor:i,children:"Password"}),(0,E.jsx)(b,{id:i,type:"password",name:"password"}),(0,E.jsx)(f,{type:"submit",children:"Register"})]})},M=t(4217),j=t(9439),y=k.Z.h2(l||(l=(0,Z.Z)(["\n  text-align: center;\n  margin-top: 25px;\n"]))),C=k.Z.p(a||(a=(0,Z.Z)(["\n  text-align: center;\n  margin: 25px auto 0;\n  max-width: 500px;\n"]))),I=k.Z.img(d||(d=(0,Z.Z)(["\n  width: 150px;\n  margin: 25px auto 0;\n"]))),G=k.Z.button(h||(h=(0,Z.Z)(["\n  display: block;\n  margin: 25px auto 0;\n"]))),v=t(5861),Q=t(4687),V=t.n(Q),A=t(1243),S=function(){var e=(0,v.Z)(V().mark((function e(n){var t;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.Z.post("".concat("https://nodejs-hw-rest-api-contacts.onrender.com/api","/auth/verify"),n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=t(2791),w=t.p+"static/media/sendEmail.6ed7f48375fe6e8d35bf.jpg",B=t(7062),L=function(){var e=(0,Y.useState)(""),n=(0,j.Z)(e,2),t=n[0],i=n[1],r=(0,x.I0)(),s=(0,x.v9)(M.Hz).user;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(y,{children:"Email verification"}),""===t?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(C,{children:["We have sent you a letter to the e-mail address you specified during registration. Please verify your email to continue working. Thank you."," "]}),(0,E.jsx)(I,{src:w,alt:"Send list"}),(0,E.jsxs)(C,{children:['If you did not receive the letter, click the "Send again" button. Please check your spam folder before clicking the resend button.'," "]})]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{children:"We have resent the letter to your e-mail, go to your e-mail to verify the e-mail."}),(0,E.jsx)(I,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAACcCAMAAAA9MFJFAAABIFBMVEViwuwVpbCc3P+75vnS8vE5QWUqM1QPlpphwuz/qDf///9GttQLo6u65vkrKk1bv+sYlKJkyfNpxfNMgqg2NluL0O8bprRVxPbxqDcApLcTn6jAsoj/pyrWp0zerFxswOADk5RBrseu4PZ0yO7Z9PLr+fia2POk3PWU1vdDdpre9fTY7vlUvOB/zfDC7//p+PjS7PnH6Pjw+P0vrcHH6/PX8fYsMFiU2f//pAKTur+qtqb/piLIsYV3v9jbrGDRrWhXps5QlrxcstsjH0IiMk8eVmtFao8rIEcoQl4biJcSsbk+WX5CRGVSWXheZYBwdY2BhZkjLFaus78iZnuHpbofdolfco5xiqOQsMWdwdXjqDit1efm+/FthZ9xpcR4sM/48JfNAAAOy0lEQVR4nO2dj5vbtBnHfXGPCSc607TKGGOwyont2vEldpIGxjagHbRdKYNtwBis/P//xV5J/iHZcuIkbnPHo+9Duesll1ifvK/eV+8ruZZlZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRk9Br126bOfUm3Tb9v6tyXdLuEPny/ro8+ds99VbdK6MN331b10Z+MIx+kBsJP/mwIHqY6wvc/MAQPVAOhMcJD1XRkMxUeKE04+dgwPEhNhG9/8heT1BwigfCvH8j69NwX1V3IZULIQme8BkAIUfjWLvCClFI/8TzBktF84zC5Fd7aRMb1nZkDypwsi5d2SIiXG+YbtMxbjjDAd5im0yhazGaAMwMt7coy+3onhO5yaR4a326E1KZ3agKaHCYzzNjvieFd67PP7z289/lnQ40eAMI/6B5QNZ+fccJuFSBsMqxgTqMN6YEhuvv44VtPnlxdXT158rcvno8aYgh/1/xxXReT1fz0q+lZDKFN160Q19T2Tn6Tu+6XV/cvLy/f4rp6+uz5hSqB8KKDRqPVTbNEjtDGrQzh4eBEM0R3P7/PAF6WEN96+uy9IxEyDfsZel/KEdp6hlP+6GnvgO5+eXVZqbDE538/GuHoQT9j70luYAuGGw3BiBM8zQwRevHo8rI0wxLi039JDA9DCAzHvQE4Xa5vC4Z4M60TXAi8duoeNP2wfBIVibrrvvjq5df/+Oabl9/WGX5RMTwQ4c3y5QIhMIwjleAswPlju4OySgxScstLSOj7FKdxHGeZI/TP+3VnruzwYIQXNygwlwghLqczlWD1iGbNJyHzkiQhPgWvT2OWmDt1QZY5y67//ahuh98VDA9GOFqdgVWLJIQwIS5KZ55mFUGNGbqWD2aWLjMtMsZssYiiaFpNDhTbXzWCyjtHW+ENMkMZoU38LHfmyAkIrR6gtdnQJVnDzASzltxoCgTtr+uB+erZ8QhvjhlWCLHtk0EYzwRBuh0QH5cMk5oZAjVGTDazXeIEr79vhuXvjkb4ms0QMVmdilZVOLH9cDAYhEtmUg5l3w9I6cyB8lousTuRK7VmFq0gzBk+Ox5hz8mhEhFzWV6XWlWZ1NgBpzYIaZzF+feDEAxRmKLnqr8UHESQfxTXPzQRXj0/GuGkV4KuRQgJA2qny+UyjheLGZ+eYm8/wxxhSRAE8bX8fhDmhqik125oH8JwI17j+odHl3WGVyI5PAbhqE9PRh6fz2e1qWmN6X47LKyQVtRqCnMzlF4KHBkYrqctyGqK8reQs5pquXy0FY76TK/dEOu8B6vj3omwnSCIG5FcN+QI7QB3YhgF+Vxw/R8NQpHXaBCORpMVCL62MVz1uMqDETXLVRtaG/cuhDsJgoABlmpebiK4d2FYrXFqCC93IRythmjMhYYXLRD7TGtQksIHrSFo472/yxHiPQS5IUofR47QpnQvw1lQppfXP37bivC/774rI4R5DuDNQQDSWrUw7BGh5aW81iKNZ0P1+ZwWId4HkInKNS+vSLlp1ApPELSlBL0d4QUvSVdCY2s4ET9czVsZ9o3QxjgtIE43RUJHOyDsRBDCijSvFghtGix2EkylZSL+qdWRa0JjNMkr/fBnOLYmrxshslI+32C85AOaLsIiF9kbUADhbnAgQjyQ9GEgq+ISVuvqJsGlvHzsihCYISC3miM0HM2H8Gc815phL/BcsQJBAqFNE7qIplEWsqELD9rXPEJJoMMGuWHi8QCCXMTb8/JaR0II71AvklUEM2LLwvc7IZyMxxNme0xz+G8ESfRrs0LXT0TRSSBkcTVM46UIDlsOcb8nQx6dM0uYsXnVQqfdgF1bYThrIZgoBO31ZReEAG/OvXc+mczHaDwcgRmuOiJEVnn5nQgiaz2dbmzfc4Ufc3Tb7bY0J39HaoiKN3FZ/o32MNuBENskdTQEFxnBNYQvO1khGq9GEyA44pSAHvB80A0hQl7oB5Smy023bgXybLZCmP58hzutLjMJ2hofbhIvraN7Ii5VGPrUaUyIC0eulnFdd0IIbjtiizcWhkfwoU44Qt1k2ARiLX6GFRq7lnU3hC5Jqc3sEPNx6MNBixV6OJo56bEQFYRsge07NWeeOX5g1xEqpZo2hCvmx4CDOzViX5kjd0RYLDE2GHdD6AeDLQ0GYhRNeonH6vP6Xw1Y23PmUHQURBUhZ5g5KkFK6gS7IRwxhBe5H4M/D0fMLrVZjQYhxnzlvgGj6jgwLwm3LOvFNlVDKoumO7ZmwfICs3X11MmCYzYeuTULY+XaTHLmmWMnpMHw+n8HIhw9GIML8/jSbS6EjxankWjeqsNqjS88AgDHgJaWx0yPpyE7EZQ7aSInC7tCRKJTx/5Xd1JKQhI7i5JgmgwGpB5OtNUujSOj0goRgvxmZekDcgvCkC6CLYyvJMBoeMROWonwMO6xHIbBs5hj7i/PsGyjmDYWTpzsjMVlosC7m77veUlSixSYkMEgifMJceYsE/Z51u1QV+3ShZMxDyMPRpO5BdF5aOmDSQtClpMM+Ho0H5NrJTDU6b74gnjhumOtP5/Kqn00MGRP+/pF+dtjHYBlLJp12YBfoSKfsB8mKWupsC2Kec02VO2wG0IIHsMRK2Qhi1ezxvBXLUEdQr8MCThH6GIRoTHuc8OpKPfZVJ67NMEZuUCONdOlRh0sfu5sGwgDIi47sfnTMlLkVypDXcFQkxcCPvBeSGsQWKCF5hCNJ93CCYwsn81gPiuMEAInZC0DvMOTD1axPFO2FTqOXYfoxiU3pbkp8k1lIiw++sRfZjGW+wayL1//2AkhJIWIVVonfEMhq722LJJ1Yyum62omTFI8YJWUoEeErPPBR67sRIrqwdkljr4t3EBYEoTpL1E6LzWG3RAyNmhVFL/YhsLxCWtkhGyR4PW6C7+IAalKCCASCaIbtOx+VRHC+k5ZFoX1RZLE8KeOCC9YoXW4moBYNBkjLcGOZQaX4Ttg8drlJcsCVFAvD0QsOEvPo9oOE5+xpVCyr+RdMsQ/dVmdcNN7kJf9eem/JSB3rdT0t+M+FyysiyleUy6VgjNDTXV9LRXhvrYLY1i8YWeEzH0fzOcwo82Hq9YG1IED780OpbUZrXlyDjEPzjxuY40zKwgx2QeQOXfh85ddEQqMtXbAKQghp7V68mZXruE1PJkJFn0iIRDthCZDKiPcb4MSQ3lv136Ee3XQuEm0sf3koJJem0ojpAEhujrfnXV+ToIj1LTcBULhnPrykIahqGi+PBtCFKz58aRlQDrs8dilPKu2cRBC6NzWa/ZTlsXnSSiy0txWU/VZeFtaYbDdC68Qe/r11+dCyGo4+RCjdddlSsvTuBHSPIpuqeTJ8BGtMQWAdiB+uSxNB7YSd64Zt7LT0Fn17XFv1go9uFzhTeneXkgO0EW6/gePssGgtJ3Ck6eL2SalNHdyr1hdVj4/m2oQduyeVgzPh5B5H1tKTNd41wEGsUMuZ7ZcZMsl9klS1ApEq0/mxxDGziKazbLY9st9G+VbSLEbl9tf2VxZIDyMICys8cOzIYQkdzCYRWyU+qamgOfRdLHmaZ3r84Iq0HFmWbZMbZIXrLa1ySuJnSz1w0SqBqTlAl2uJUhtunVeZ2jWyfcpfHGmuRBZlL//lhUS6wfihOlZIY03M+ZtlO0BgXWhXETgKJ0sjlMKn8WWq2SYJFu2L7OCVe6dUXey+7YTSQhTmx4MMHzVdYHXuxVaSXEV9eMLyLU83wZ4P+dzFQuiCdhjinVnEwVLgLlMVQChtOYtX9xVK6ZBULSYIA5ltRdoYSZEiPjyquuGkNeAkBf32UVRNZogspjN5HLKhjtkku94az2bCCgXS2W0lcFVG7hqCDEp2iNA0CHNYFwC42IlG/b1l19+efXqh3vff/niUt3M8KYRIlbQT5KBOhW6gUopwiKDzTu4+ioB90VM1WBAyoVzZeVI3YwA0PL2yCB2fJKblsSM77zxvOKCEXp8yQ7f3X90n+myoTeMkF1Us+TgBsox2MiuiS61DHn6rGYkoe6smKf4MVsM89I+zAVBQmQxkIOqd5A3DtHjp/d36Yrp6Tst6+D957tHByPUSDTSNvkO6ygNQ5/me7wKhvUtQ9NpKh5U57JtHk9o2+ajvDKd0AzmUrskKL1EY92EHt/bqYdc7IYB7zW12n+bgWEfRQOOEIikEZCKNmx62oaDgFYpCl0qlQRYahcPkkRhmMcTdUun7MaFx5MgIJINVq/Q3A2a389it+B549809Mc3dVw2b+dSsqXxYilP8EG+0qCkOpsYLWJa0qUQtpUCff5T5eUrglVdFea+cvrjTly+xNGVTS3C0+l0Un6knVufmjSH/PAXZaUEWyziZrM0qGd/EsRQY4RVbl1fDIflFAiiWEwNtxhhfXheKFhR0cbYUggBTkbDrZyk8LY9ckuIW2w3DgiUexZ211WLvPzoqensCJWSXcKy7ZrhbElAfW6jVVe3ONTjomJKpOxcRLMoYfMG0y6CBcP06Fb3uRFWK9XQ42kPT+eofrClHZb2hgqIQfOUStEt3V9XZQzTo2/GclaEQUEwTJhFFT9sATgoK/CpchzM4lbWPKSS59YdqoJbSFDTo1vd57VCBmubeHLW7e4ccb6SU+0NMYi4kZXkCDvVVcGIbyfCkG/nUrcRsv3GjX54jWGj6uh6SbOlgLxubix0Ox2Z7cJsphIovwWhV9ubUdmL5lAU0ja2mBt3bY+EtzIi7xDi+zc5Sc8jilUGXe9/hCzaubgfkuNv7XVDEZZCvCpbWKVgGHbd1kp3F/eLOk1VoDlKNx1hLr6Jk+8bY4dzOv6StOOxBi4kxVEfS9xv85T9j2NNmeEGIix12N1F2y2uxxtsjpsbMHs98n5W8eAuStCMW3Euq+c7CP6qEVZ3xn2d9138dSPs3eJ0+rUjfAMyCE+WQXiyDMKTZRCeLIPwZBmEJ8sgPFkG4ckyCE+WQXiyDMKTZRCeLIPwZBmEJ8sgPFkG4ckyCE+WQXiyNAgP/Ddh/g9bIAWf/iIkSwAAAABJRU5ErkJggg==",alt:"Send list"})]}),(0,E.jsx)(G,{type:"button",onClick:function(){S({email:s.email}).then((function(e){var n=e.message;i(n)})).catch((function(e){return console.log(e.message)}))},children:"Send again"}),(0,E.jsx)(G,{type:"button",onClick:function(){r((0,B.B)("register"))},children:"Register again"})]})};function D(){var e=(0,x.v9)(M.Hz).verify;return(0,E.jsxs)("div",{children:[(0,E.jsx)(u.q,{children:(0,E.jsx)("title",{children:"Registration"})}),"register"===e?(0,E.jsx)(R,{}):(0,E.jsx)(L,{})]})}}}]);
//# sourceMappingURL=34.48e1a8a5.chunk.js.map