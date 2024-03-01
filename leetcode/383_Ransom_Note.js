// 383. Ransom_Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let r_pointer = 0;
    let m_pointer = 0;
    let canConstruct = false;

    if(ransomNote.length > magazine.length){
        return canConstruct;
    }

    for(r_pointer; r_pointer < ransomNote.length; r_pointer++){
        while(ransomNote[r_pointer] != magazine[m_pointer]){
            m_pointer++;
            if(m_pointer>magazine.length){
                return canConstruct;
            }
        }
        magazine = magazine.slice(0, m_pointer);
    }
    canConstruct = true;
    return canConstruct;
};