const tasizan = document.getElementById("tasu");
        const hikizan = document.getElementById("hiku");
        const kakezan = document.getElementById("kakeru");
        const warizan = document.getElementById("waru");
        const btn=document.getElementById("tekiyou");
        const num=document.querySelectorAll(".num");
        const clear=document.getElementById("clear");
        let frag=0;
        let a=0;
        let b=0;
        tasizan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            frag=0;
            a=answer.textContent;
            answer.textContent="";
        }
        hikizan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            frag=1;
            a=answer.textContent;
            answer.textContent="";
        }
        kakezan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            frag=2;
            a=answer.textContent;
            answer.textContent="";
        }
        warizan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            frag=3;
            a=answer.textContent;
            answer.textContent="";
        }
        tekiyou.onclick = () =>
        {
            let answer=document.getElementById("answer");
            if (frag==0) {
                b=answer.textContent;
                console.log(a);
                console.log(b);
                answer.textContent=Number(a)+Number(b);
            }
            if (frag==1) {
                b=answer.textContent;
                answer.textContent=Number(a)-Number(b);
            }
            if (frag==2) {
                b=answer.textContent;
                answer.textContent=Number(a)*Number(b);
            }
            if (frag==3) {
                b=answer.textContent;
                answer.textContent=Number(a)/Number(b);
            }
        }
        // ボタンが押されたときに数値を表示する処理
        const answerElement = document.getElementById('answer');
        const numButtons = document.querySelectorAll('.num');

        numButtons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.value;
                answerElement.textContent += value;
            });
        });
        clear.onclick = () =>
        {
            answer.textContent="";
            a=0;
            b=0;
        }