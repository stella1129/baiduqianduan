//function toSum(arr,target){
//    var result=[];
//    var length = arr.length;
//    for(var i = 0;i<arr.length;i++){
//        for(var j =i;j<arr.length;j++){
//            if (arr[i]+arr[j+1]==target){
//                result.push(i,j+1);
//                console.log(result)
//                return result
//            }
//        }
//    }
//}



//var twoSum = function(nums, target){
//    var saved={};
//    var result=[];
//    for(i=0; i< nums.length; i++){
//        if(saved.hasOwnProperty(nums[i])){
//            result[0] = saved[nums[i]] + 1
//            result[1] = i + 1;
//            console.log(result)
//            return result
//        }
//        saved[target - nums[i]] = i
//    }
//}
//
//twoSum([1,2,3,4],5)


//var twoSum = function (nums,target){
//    var result=[];
//    var oo={}//利用对象的键和值功能
//    for(var i=0;i<nums.length;i++){
//        var x=target-nums[i];
//        if(oo.hasOwnProperty(nums[i])){
//            result.push(oo[nums[i]])
//            result.push(i);
//            console.log(result)
//            return result
//        }
//        else{
//            oo[x]=i
//        }
//
//
//    }
//}
//twoSum([1,2,3,4],7)

//var contacts = [
//    {
//        "firstName": "Akira",
//        "lastName": "Laine",
//        "number": "0543236543",
//        "likes": ["Pizza", "Coding", "Brownie Points"]
//    },
//    {
//        "firstName": "Harry",
//        "lastName": "Potter",
//        "number": "0994372684",
//        "likes": ["Hogwarts", "Magic", "Hagrid"]
//    },
//    {
//        "firstName": "Sherlock",
//        "lastName": "Holmes",
//        "number": "0487345643",
//        "likes": ["Intriguing Cases", "Violin"]
//    },
//    {
//        "firstName": "Kristian",
//        "lastName": "Vos",
//        "number": "unknown",
//        "likes": ["Javascript", "Gaming", "Foxes"]
//    }
//];
//
//var contacts = [
//    {
//        "firstName": "Akira",
//        "lastName": "Laine",
//        "number": "0543236543",
//        "likes": ["Pizza", "Coding", "Brownie Points"]
//    },
//    {
//        "firstName": "Harry",
//        "lastName": "Potter",
//        "number": "0994372684",
//        "likes": ["Hogwarts", "Magic", "Hagrid"]
//    },
//    {
//        "firstName": "Sherlock",
//        "lastName": "Holmes",
//        "number": "0487345643",
//        "likes": ["Intriguing Cases", "Violin"]
//    },
//    {
//        "firstName": "Kristian",
//        "lastName": "Vos",
//        "number": "unknown",
//        "likes": ["Javascript", "Gaming", "Foxes"]
//    }
//];
//console.log(contacts[1]["likes"]);
//function lookUp(firstName, prop){
//    for(var i =0;i<contacts.length;i++){
//        if(contacts[i].firstName==firstName){
//                if(contacts[i].hasOwnProperty(prop)){
//                    console.log(contacts[i][prop])
//                    return contacts[i][prop];
//                }
//            }
//            console.log("No such property");
//            return "No such property";
//        }
//    console.log("No such contact");
//    return "No such contact";
//    }
//

//function lookUp(firstName, prop){
//    for(var i=0;i<contacts.length;i++){
//        if(contacts[i].firstName== firstName){
//            if(contacts[i].hasOwnProperty(prop)){
//                console.log(contacts[i][prop])
//                return contacts[i][prop];
//            }else{
//                console.log("No such property");
//                return "No such property";
//            }
//        }
//    }
//    console.log("No such contact");
//    return "No such contact";
//}
//// Change these values to test your function
//lookUp("Kristian", "firstName");

//function a(str){
//    var s = str.split([" "]);
//    var max=0;
//    var t=0;
//    for (var i = 0; i < s.length; i++) {
//        t=s[i].length
//        if(t>max){
//            max= t;
//        }
//    }
//    console.log(max);
//    return max;
//    }
//
//
//a("qw ert aaaaaa");
function rot13(str) { // LBH QVQ VG!
    var c=[];
    var x=str.split('');
    console.log(x);
    for(var j=0;j<x.length;j++){
        if(x[j].charCodeAt()>64&&x[j].charCodeAt()<91){
            if(x[j].charCodeAt()+13<91){
                z=String.fromCharCode(x[j].charCodeAt()+13);}
            else{z=String.fromCharCode(x[j].charCodeAt()+13-90+65-1);}
            c.push(z);
        }else{
            c.push(x[j]);
        }
    }
    console.log(c)
    var ss=c.join('');
    console.log(ss);
    return ss;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

