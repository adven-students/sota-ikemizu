        const tasizan = document.getElementById("tasu");
        const hikizan = document.getElementById("hiku");
        const kakezan = document.getElementById("kakeru");
        const warizan = document.getElementById("waru");
        const btn=document.getElementById("tekiyou");
        let frag=0;
        tasizan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            let ez=document.getElementById("ez");
            ez.textContent="+";
            console.log(ez.textContent);
            frag=0;
        }
        hikizan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            let ez=document.getElementById("ez");
            ez.textContent="-";
            console.log(ez.textContent);
            frag=1;
        }
        kakezan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            let ez=document.getElementById("ez");
            ez.textContent="*";
            console.log(ez.textContent);
            frag=2;
        }
        warizan.onclick = () =>
        {
            let answer=document.getElementById("answer");
            let ez=document.getElementById("ez");
            ez.textContent="÷";
            console.log(ez.textContent);
            frag=3;
        }
        btn.onclick = () =>
        {
            let answer=document.getElementById("answer");
            const a = document.getElementById("a");
            const b = document.getElementById("b");
            if (frag==0) {
                answer.textContent= Number(a.value)+Number(b.value);
                console.log(a);
                console.log(b);
            }
            if (frag==1) {
                answer.textContent= Number(a.value)-Number(b.value);
                console.log(a);
                console.log(b);
            }
            if (frag==2) {
                answer.textContent= Number(a.value)*Number(b.value);
                console.log(a);
                console.log(b);
            }
            if (frag==3) {
                answer.textContent= Number(a.value)/Number(b.value);
                console.log(a);
                console.log(b);
            }
        }
        