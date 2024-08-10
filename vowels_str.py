def vowel_count(str):
    count = 0
    vowel = set("aAeEiIoOuU")
    for alphabet in str:
        if alphabet in vowel:
            count +=1
    print("number of vowels ", count)
vowel_count("Lakshmi Saraswathi")            
