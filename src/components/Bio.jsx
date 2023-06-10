import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Bio({ isJapanese }) {
  const { ref, inView } = useInView({
    rootMargin: '-200px 0px', // px以外は❌??
    triggerOnce: true, 
  });

  return (
    <div className="bio section" ref={ref} >
      {inView && (
        <>
        <div className="bio_img_pa animate__animated animate__fadeInUp">
          <img
            className="bio_img "
            src="profile-min.png"
          ></img>
          </div>
          <div className="bio_p">
            <h2 className="bio_name">Iori Kawano</h2>

            <div
              className={`bio_snt bio_snt1 animate__animated animate__fadeInUp animate__slow animate__delay-1s left-align toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
            >
              I started studying programming in July 2022. I am completely
              self-taught as I belong to a liberal arts department. This is what
              got me interested in the IT industry.
            </div>
            <div
              className={`bio_snt bio_snt1 animate__animated animate__fadeInUp animate__slow left-align toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
            >
              2022年7月からプログラミングの勉強を始めました。私は文系学部に所属しているため、完全に独学で文系学部に所属しているため、独学で勉強しています。このことがIT業界に興味を持ったのがきっかけです。
            </div>

            <div
              className={`bio_snt bio_snt2 animate__animated animate__fadeInUp animate__slow  animate__delay-2s left-align toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
            >
              In recent news and in my daily life, I feel that the demand for
              technology is only increasing day by day. I believe that humans
              and computers will be more closely related in the future.
            </div>
            <div
              className={`bio_snt bio_snt2 animate__animated animate__fadeInUp animate__slow left-align toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
            >
              最近のニュースや日々の生活の中で、技術に対する要求は日々高まるばかりだと感じています。今後、人間とコンピューターはより密接な関係になっていくのではないでしょうか。
            </div>

            <div
              className={`bio_snt bio_snt3 animate__animated animate__fadeInUp animate__slow  animate__delay-3s left-align toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
            >
              My priority in terms of work values is internationality and the
              future potential of the business. This is due to my genuine love
              of English and foreign cultures and my desire to contribute to the
              globalization of Japan.
            </div>
            <div
              className={`bio_snt bio_snt3 animate__animated animate__fadeInUp animate__slow left-align toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
            >
              私が仕事の価値観として優先するのは、国際性と事業の将来性です。これは、私が純粋に英語や外国の文化が好きであることと、日本のグローバル化に貢献したいという思いからです。
            </div>

            <div
              className={`bio_snt bio_snt4 animate__animated animate__fadeInUp animate__slow  animate__delay-4s left-align toggleBox-en ${
                isJapanese ? 'display-none' : ''
              }`}
            >
              I believe that the Japanese people need to be more willing to
              coexist with people from other countries against the backdrop of a
              declining and aging population. Second priority is the potential
              of the work. I would like to be involved in a job where I can
              bring convenience, health, and happiness to people through IT.
            </div>
            <div
              className={`bio_snt bio_snt4 animate__animated animate__fadeInUp animate__slow left-align toggleBox-jp ${
                isJapanese ? '' : 'display-none'
              }`}
            >
              少子高齢化を背景に、日本人が他国の人と共存していく姿勢が必要だと考えています。
              第二の優先順位は、仕事の可能性です。ITを通じて人々に便利さ、健康、幸せを提供できるような仕事に携わりたいと考えています。
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Bio;
