import React from "react";
import {SafeAreaView,View,Text,Button} from 'react-native';


function App(){
 function sayHello(){

console.log('Selam');
 }

 const selamver = (label: string) => {
console.log('Arrow functiondan selamlar '+ label)  //Arrow functuon tanımladık
//eğer fonksiyonun yanına selamver() şeklinde parantez koyarsak butona tıklamadan konsola yazdırır fonksiyonu direkt çağırıyor yani
//bulunduğu yere fonksiyonun çıktısını gönderir fonksiyonu göndermez doğru bir kullanım değildir.
//bir şey eklerken mesela disable ekleyeceğiz eğer disablenin yanında soru işareti varsa oraya eklenmesi zorunlu değildir.  
 };
  return(
    
    <SafeAreaView>    
    <View>
    <Text>Hello World</Text>
    <Text>Hello World2</Text>
    <Text>Hello World3</Text>
  </View>

  <Text>Hello World 4</Text>              
  <Button 
  title="Here Press Me!" 
  onPress={() => selamver('Yasin')} 
  disabled = {false}
  color = {'lightcoral'}
  />
  <Text>Naber</Text>
  
  </SafeAreaView>

  );
}

export default App; //Dışarıya göndermeye yarıyor.Bunu yazınca uygulamada gözüktüpp