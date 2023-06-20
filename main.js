var a = parseInt(prompt("Enter the fibonacci series"));
            var b = 0;
            var c = 1;
            
            for(let i=0; i<a; i++){
               // document.write("<br>")
                // document.writeln(b);
				console.log(b);
            
                d = b+c;
                b=c;
                c=d;
            }