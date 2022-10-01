import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

export default async function getJEEMinfo(){

    try{
        const response=await fetch("https://jeemain.nta.nic.in/");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.gen-list > ul >li').map((index,ele)=>{
            // console.log(ele);
            const content=$(ele).find('a').text().trim();
            const link=$(ele).find('a').attr('href');
            // console.log(content,link);

            items.push({
                content,
                link
            })
        });

        fs.writeFile('JEEM.json',JSON.stringify(items),function(err){
            if(err) return console.log(err);
            console.log('JEE main notices were saved as : JEEM.json');
        });

    }catch(error){
        console.log(error);
    }
}
export async function getJEEAinfo(){

    try{
        const response=await fetch("https://jeeadv.ac.in/");
        const body=await response.text();
        const $ =cheerio.load(body);

        // const wrapper=$('.gen-list');
        // console.log(wrapper.length);

        const items=[];
        $('.div-block-2 >.text-block-3').map((index,ele)=>{
            const contt=$(ele).text().trim();
            const content=$(ele).find('a').text().trim();
            const link=$(ele).find('a').attr('href');
            console.log(contt);

            // items.push({
            //     content,
            //     link
            // })
        });

        // fs.writeFile('JEEM.json',JSON.stringify(items),function(err){
        //     if(err) return console.log(err);
        //     console.log('JEE main notices were saved as : JEEM.json');
        // });

    }catch(error){
        console.log(error);
    }
}
export async function getNEETinfo(){

    try{
        const response=await fetch("https://neet.nta.nic.in//");
            const body=await response.text();
            const $ =cheerio.load(body);
    
            // const wrapper=$('.gen-list');
            // console.log(wrapper.length);
    
            const items=[];
            $('.gen-list > ul >li').map((index,ele)=>{
                // console.log(ele);
                const content=$(ele).find('a').text().trim();
                const link=$(ele).find('a').attr('href');
                // console.log(content,link);
    
                items.push({
                    content,
                    link
                })
            });
    
            fs.writeFile('NEET.json',JSON.stringify(items),function(err){
                if(err) return console.log(err);
                console.log('JEE main notices were saved as : NEET.json');
            });
    
        }catch(error){
            console.log(error);
        }
}