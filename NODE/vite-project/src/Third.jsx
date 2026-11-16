import React from "react";

function Third(){
    const first={
        Name:'Krishna',
        imageUrl :'https://officechai.com/wp-content/uploads/2015/02/krishna_arjuna_conchshells-600x450.jpg',
        width:300,
        height:300,
        Description:"Krishna (/ˈkrɪʃnə/;[12] Sanskrit: कृष्ण, IAST: Kṛṣṇa [ˈkr̩ʂɳɐ]) is a major deity in Hinduism. He is worshipped as the eighth avatar of Vishnu and also as the Supreme God in his own right.[13] He is the god of protection, compassion, tenderness, and love;[14][1] and is widely revered among Hindu divinities.[15] Krishna's birthday is celebrated every year by Hindus on Krishna Janmashtami according to the lunisolar Hindu calendar, which falls in late August or early September of the Gregorian calendar."
    }
    
const second={
    Name:'Bhishma',
    imageUrl :'https://officechai.com/wp-content/uploads/2015/02/Bhishma-Pitamah.jpg',
    width:300,
    height:300,
    Description:'Bhishma was one of the most powerful warriors of his time and in history. He acquired his prowess and invincibility from being the son of the sacred Ganga and by being a student of Lord Parashurama. Despite being about five generations old, Bhishma was too powerful to be defeated by any warrior alive at that time. Every day, he slew at least 10,000 soldiers and about a 1,000 rathas.At the beginning of the war, Bhishma vowed not to kill any of the Pandavas, as he loved them, being their grand-uncle. Duryodhana often confronted Bhishma alleging that he was not actually fighting for the Kaurava camp as he would not kill any of the Pandavas. He also did not allow any of the Kauravas to be killed in the war, as he loved all his grand-nephews and wanted a peace negotiatio'
}



const third={
    Name:'Dronacharya',
    imageUrl :'https://officechai.com/wp-content/uploads/2015/02/eklavya_paying_guru_dakshina_to_dronacharya_we50.jpg',
    width:300,
    height:300,
    Description:'Dronacharya is a major character of the Hindu epic Mahabharata. In the epic, he serves as the royal preceptor of the Kauravas and the Pandavas. He is one of the primary counsellors and warriors featured in the epic.He is a friend of Sukracharya, the guru of the asuras, as well as Mahabali. He is described to be the son of the sage Bharadvaja, and a descendant of the sage Angirasa. The preceptor is a master of advanced military arts, including the divine weapons known as astras',
    background : 'red'
   

}


const fourth={
    Name:'Shakuni',
    imageUrl :'https://officechai.com/wp-content/uploads/2015/02/shakuni.jpg',
    width:300,
    height:300,
    Description:"Shakuni (Sanskrit: शकुनि, IAST: Śakuni, lit. 'bird') is one of the antagonists of the Hindu epic Mahabharata. He was the prince of the kingdom of Gandhara when introduced, later becoming its king after the death of his father, Subala. He was the brother of Gandhari and the maternal uncle of the Kauravas.Portrayed as intelligent, crafty and devious, Shakuni supported his nephews, particularly the eldest, Duryodhana, in plotting against their cousins—the Pandavas. It was Shakuni who played the game of dice against Yudhishthira, one of the seminal events in the epic"
}

const fifth={
    Name:'Duryodhana',
    imageUrl :'https://officechai.com/wp-content/uploads/2015/02/duryodhana.jpg',
    width:300,
    height:300,
    Description:"Duryodhana (Sanskrit: दुर्योधन, IAST: Duryodhana), also known as Suyodhana, is the primary antagonist in the Hindu epic Mahabharata. He was the eldest of the Kauravas, the hundred sons of the king Dhritarashtra and his queen Gandhari.Being the first-born son of the king, he was the crown prince of the Kuru Kingdom and its capital of Hastinapura, often forced into ceding the title to his cousin Yudhishthira, who was one of the Pandava brothers and older than he. Aided by his maternal uncle Shakuni, Duryodhana tricked the Pandavas into surrendering their kingdom and forced them to go into exile. Later, Duryodhana waged the Kurukshetra War against his cousins and was helped by the warriors Bhishma, Drona and Karna.",
}

const sixth={
    Name:'Dhritarashtra',
    imageUrl :'https://officechai.com/wp-content/uploads/2015/02/Dhritarashtra.jpg',
    width:300,
    height:300,
    Description:"Dhritarashtra (Sanskrit: धृतराष्ट्र, ISO-15919: Dhr̥tarāṣṭra) was a Kuru king, and the father of the Kauravas in the Hindu epic Mahabharata. He was the King of the Kuru Kingdom, with its capital at Hastinapura. He was born to Vichitravirya's first wife, Ambika.Dhritarashtra was born blind.[1] He fathered one hundred sons and one daughter, Dushala, by his wife, Gandhari and a son, Yuyutsu, by his wife's maid. These children, including the eldest son Duryodhana, but not including Yuyutsu and Dushala, came to be known as the Kauravas."
}



return(
        <>
        <h1 style={{color:'blue', marginLeft:'500px'}}>Greatest Character In Mahabharata</h1>
        <br />  <hr /> <br />
<h2 style={{color:'green', marginLeft:'600px', fontFamily:'cursive'}}>{first.Name}</h2>
        <img src={first.imageUrl} 
        
        style={
            {
                width:first.width,
                height:first.height,
                marginLeft:'500px'

            }
        }

        />
        <p style={{fontSize:'20px'}}>{first.Description}</p>

<hr />


<h2 style={{color:'green', marginLeft:'600px', fontFamily:'cursive'}}>{second.Name}</h2>
        <img src={second.imageUrl} 
        
        style={
            {
                width:second.width,
                height:second.height,
                marginLeft:'500px'

            }
        }
        />
        <p style={{fontSize:'20px'}}>{second.Description}</p>

<hr />


<h2 style={{color:'green', marginLeft:'600px', fontFamily:'cursive'}}>{third.Name}</h2>
        <img src={third.imageUrl} 
        style={
            {
                width:third.width,
                height:third.height,
                marginLeft:'500px'

            }
        }

        />
        <p style={{fontSize:'20px'}}>{third.Description}</p>

<hr />



<h2 style={{color:'green', marginLeft:'600px', fontFamily:'cursive'}}>{fourth.Name}</h2>
        <img src={fourth.imageUrl} 
        style={
            {
                width:fourth.width,
                height:fourth.height,
                marginLeft:'500px'

            }
        }

        />
        <p style={{fontSize:'20px'}}>{fourth.Description}</p>


<hr />


<h2 style={{color:'green', marginLeft:'600px', fontFamily:'cursive'}}>{fifth.Name}</h2>
        <img src={fifth.imageUrl} 
        style={
            {
                width:fifth.width,
                height:fifth.height,
                marginLeft:'500px'
            }
        }

        /> 
        <p style={{fontSize:'20px'}}>{fifth.Description}</p>

<hr />


<h2 style={{color:'green', marginLeft:'600px', fontFamily:'cursive'}}>{sixth.Name}</h2>
        <img src={sixth.imageUrl} 
        style={
            {
                width:sixth.width,
                height:sixth.height,
                marginLeft:'500px'

            }
        }

        /> 
        <p style={{fontSize:'20px'}}>{sixth.Description}</p>



        </>
    )
}

export default Third