Kn.prototype._replace_a2u_anuswara_visarga = function(txt) {    return txt.replace('A', 'ಂ').replace('B', 'ಃ');}
Kn.prototype._replace_from_map = function(txt){
    return txt.replace(/μï/g, "ಷ್").replace(/μË/g, "ಷೌ").replace(/μÉÊ/g, "ಷೈ").replace(/μÉÆÃ/g, "ಷೋ").replace(/μÉÆ/g, "ಷೊ").replace(/μÉÃ/g, "ಷೇ").replace(/μÉ/g, "ಷೆ").replace(/μÁ/g, "ಷಾ").replace(/μÀÈ/g, "ಷೃ").replace(/μÀÆ/g, "ಷೂ").replace(/μÀÄ/g, "ಷು").replace(/μÀ/g, "ಷ").replace(/¿õï/g, "ೞ್‌").replace(/¿õË/g, "ೞೌ").replace(/¿õÉÊ/g, "ೞೈ").replace(/¿õÉÆÃ/g, "ೞೋ").replace(/¿õÉÆ/g, "ೞೊ").replace(/¿õÉÃ/g, "ೞೇ").replace(/¿õÉ/g, "ೞೆ").replace(/¿õÁ/g, "ೞಾ").replace(/¿õÀ/g, "ೞ").replace(/¿È/g, "ೞೃ").replace(/¿Æ/g, "ೞೂ").replace(/¿Ä/g, "ೞು").replace(/¿Â/g, "ೞಿ").replace(/¾õï/g, "ಱ್‌").replace(/¾õË/g, "ಱೌ").replace(/¾õÉÊ/g, "ಱೈ").replace(/¾õÉÆÃ/g, "ಱೋ").replace(/¾õÉÆ/g, "ಱೊ").replace(/¾õÉÃ/g, "ಱೇ").replace(/¾õÉ/g, "ಱೆ").replace(/¾õÁ/g, "ಱಾ").replace(/¾õÀ/g, "ಱ").replace(/¾È/g, "ಱೃ").replace(/¾Æ/g, "ಱೂ").replace(/¾Ä/g, "ಱು").replace(/¾Â/g, "ಱಿ").replace(/½Ã/g, "ಳೀ").replace(/½/g, "ಳಿ").replace(/¼ï/g, "ಳ್").replace(/¼Ë/g, "ಳೌ").replace(/¼ÉÊ/g, "ಳೈ").replace(/¼ÉÆÃ/g, "ಳೋ").replace(/¼ÉÆ/g, "ಳೊ").replace(/¼ÉÃ/g, "ಳೇ").replace(/¼É/g, "ಳೆ").replace(/¼Á/g, "ಳಾ").replace(/¼ÀÈ/g, "ಳೃ").replace(/¼ÀÆ/g, "ಳೂ").replace(/¼ÀÄ/g, "ಳು").replace(/¼À/g, "ಳ").replace(/»Ã/g, "ಹೀ").replace(/»/g, "ಹಿ").replace(/ºï/g, "ಹ್").replace(/ºË/g, "ಹೌ").replace(/ºÉÊ/g, "ಹೈ").replace(/ºÉÆÃ/g, "ಹೋ").replace(/ºÉÆ/g, "ಹೊ").replace(/ºÉÃ/g, "ಹೇ").replace(/ºÉ/g, "ಹೆ").replace(/ºÁ/g, "ಹಾ").replace(/ºÀÈ/g, "ಹೃ").replace(/ºÀÆ/g, "ಹೂ").replace(/ºÀÄ/g, "ಹು").replace(/ºÀ/g, "ಹ").replace(/¹Ã/g, "ಸೀ").replace(/¹/g, "ಸಿ").replace(/¸ï/g, "ಸ್").replace(/¸Ë/g, "ಸೌ").replace(/¸ÉÊ/g, "ಸೈ").replace(/¸ÉÆÃ/g, "ಸೋ").replace(/¸ÉÆ/g, "ಸೊ").replace(/¸ÉÃ/g, "ಸೇ").replace(/¸É/g, "ಸೆ").replace(/¸Á/g, "ಸಾ").replace(/¸ÀÈ/g, "ಸೃ").replace(/¸ÀÆ/g, "ಸೂ").replace(/¸ÀÄ/g, "ಸು").replace(/¸À/g, "ಸ").replace(/¶Ã/g, "ಷೀ").replace(/¶/g, "ಷಿ").replace(/µï/g, "ಷ್").replace(/µË/g, "ಷೌ").replace(/µÉÊ/g, "ಷೈ").replace(/µÉÆÃ/g, "ಷೋ").replace(/µÉÆ/g, "ಷೊ").replace(/µÉÃ/g, "ಷೇ").replace(/µÉ/g, "ಷೆ").replace(/µÁ/g, "ಷಾ").replace(/µÀÈ/g, "ಷೃ").replace(/µÀÆ/g, "ಷೂ").replace(/µÀÄ/g, "ಷು").replace(/µÀ/g, "ಷ").replace(/²Ã/g, "ಶೀ").replace(/²/g, "ಶಿ").replace(/±ï/g, "ಶ್").replace(/±Ë/g, "ಶೌ").replace(/±ÉÊ/g, "ಶೈ").replace(/±ÉÆÃ/g, "ಶೋ").replace(/±ÉÆ/g, "ಶೊ").replace(/±ÉÃ/g, "ಶೇ").replace(/±É/g, "ಶೆ").replace(/±Á/g, "ಶಾ").replace(/±ÀÈ/g, "ಶೃ").replace(/±ÀÆ/g, "ಶೂ").replace(/±ÀÄ/g, "ಶು").replace(/±À/g, "ಶ").replace(/°Ã/g, "ಲೀ").replace(/°/g, "ಲಿ").replace(/¯ï/g, "ಲ್").replace(/¯Ë/g, "ಲೌ").replace(/¯ÉÊ/g, "ಲೈ").replace(/¯ÉÆÃ/g, "ಲೋ").replace(/¯ÉÆ/g, "ಲೊ").replace(/¯ÉÃ/g, "ಲೇ").replace(/¯É/g, "ಲೆ").replace(/¯Á/g, "ಲಾ").replace(/®È/g, "ಲೃ").replace(/®Æ/g, "ಲೂ").replace(/®Ä/g, "ಲು").replace(/®/g, "ಲ").replace(/¬ÄÃ/g, "ಯೀ").replace(/¬Ä/g, "ಯಿ").replace(/«ÄÃ/g, "ಮೀ").replace(/«Ä/g, "ಮಿ").replace(/«Ã/g, "ವೀ").replace(/«/g, "ವಿ").replace(/ªï/g, "ವ್").replace(/ªË/g, "ವೌ").replace(/ªÉÊ/g, "ವೈ").replace(/ªÉÇÃ/g, "ವೋ").replace(/ªÉÇ/g, "ವೊ").replace(/ªÉÆÃ/g, "ಮೋ").replace(/ªÉÆ/g, "ಮೊ").replace(/ªÉÄÊ/g, "ಮೈ").replace(/ªÉÄÃ/g, "ಮೇ").replace(/ªÉÄ/g, "ಮೆ").replace(/ªÉÃ/g, "ವೇ").replace(/ªÉ/g, "ವೆ").replace(/ªÁ/g, "ವಾ").replace(/ªÀÈ/g, "ವೃ").replace(/ªÀÇ/g, "ವೂ").replace(/ªÀÅ/g, "ವು").replace(/ªÀÄÈ/g, "ಮೃ").replace(/ªÀÄÆ/g, "ಮೂ").replace(/ªÀÄÄ/g, "ಮು").replace(/ªÀÄ/g, "ಮ").replace(/ªÀiï/g, "ಮ್").replace(/ªÀiË/g, "ಮೌ").replace(/ªÀiÁ/g, "ಮಾ").replace(/ªÀ/g, "ವ").replace(/©üÃ/g, "ಭೀ").replace(/©ü/g, "ಭಿ").replace(/©Ã/g, "ಬೀ").replace(/©/g, "ಬಿ").replace(/¨ï/g, "ಬ್").replace(/¨Ë/g, "ಬೌ").replace(/¨ÉÊ/g, "ಬೈ").replace(/¨ÉÆÃ/g, "ಬೋ").replace(/¨ÉÆ/g, "ಬೊ").replace(/¨ÉÃ/g, "ಬೇ").replace(/¨É/g, "ಬೆ").replace(/¨Á/g, "ಬಾ").replace(/¨sï/g, "ಭ್").replace(/¨sË/g, "ಭೌ").replace(/¨sÉÊ/g, "ಭೈ").replace(/¨sÉÆÃ/g, "ಭೋ").replace(/¨sÉÆ/g, "ಭೊ").replace(/¨sÉÃ/g, "ಭೇ").replace(/¨sÉ/g, "ಭೆ").replace(/¨sÁ/g, "ಭಾ").replace(/¨sÀÈ/g, "ಭೃ").replace(/¨sÀÆ/g, "ಭೂ").replace(/¨sÀÄ/g, "ಭು").replace(/¨sÀ/g, "ಭ").replace(/§È/g, "ಬೃ").replace(/§Æ/g, "ಬೂ").replace(/§Ä/g, "ಬು").replace(/§/g, "ಬ").replace(/¦üÃ/g, "ಫೀ").replace(/¦ü/g, "ಫಿ").replace(/¦Ã/g, "ಪೀ").replace(/¦/g, "ಪಿ").replace(/¥ï/g, "ಪ್").replace(/¥Ë/g, "ಪೌ").replace(/¥ÉÊ/g, "ಪೈ").replace(/¥ÉÇÃ/g, "ಪೋ").replace(/¥ÉÇ/g, "ಪೊ").replace(/¥ÉÆÃ/g, "ಪೋ").replace(/¥ÉÆ/g, "ಪೊ").replace(/¥ÉÃ/g, "ಪೇ").replace(/¥É/g, "ಪೆ").replace(/¥Á/g, "ಪಾ").replace(/¥ÀÈ/g, "ಪೃ").replace(/¥ÀÇ/g, "ಪೂ").replace(/¥ÀÆ/g, "ಪೂ").replace(/¥ÀÅ/g, "ಪು").replace(/¥ÀÄ/g, "ಪು").replace(/¥À/g, "ಪ").replace(/¥sï/g, "ಫ್").replace(/¥sË/g, "ಫೌ").replace(/¥sÉÊ/g, "ಫೈ").replace(/¥sÉÇÃ/g, "ಫೋ").replace(/¥sÉÇ/g, "ಫೊ").replace(/¥sÉÆÃ/g, "ಫೋ").replace(/¥sÉÆ/g, "ಫೊ").replace(/¥sÉÃ/g, "ಫೇ").replace(/¥sÉ/g, "ಫೆ").replace(/¥sÁ/g, "ಫಾ").replace(/¥sÀÈ/g, "ಫೃ").replace(/¥sÀÇ/g, "ಫೂ").replace(/¥sÀÆ/g, "ಫೂ").replace(/¥sÀÅ/g, "ಫು").replace(/¥sÀÄ/g, "ಫು").replace(/¥sÀ/g, "ಫ").replace(/¤Ã/g, "ನೀ").replace(/¤/g, "ನಿ").replace(/£ï/g, "ನ್").replace(/£Ë/g, "ನೌ").replace(/£ÉÊ/g, "ನೈ").replace(/£ÉÆÃ/g, "ನೋ").replace(/£ÉÆ/g, "ನೊ").replace(/£ÉÃ/g, "ನೇ").replace(/£É/g, "ನೆ").replace(/£Á/g, "ನಾ").replace(/£ÀÈ/g, "ನೃ").replace(/£ÀÆ/g, "ನೂ").replace(/£ÀÄ/g, "ನು").replace(/£À/g, "ನ").replace(/¢üÃ/g, "ಧೀ").replace(/¢ü/g, "ಧಿ").replace(/¢Ã/g, "ದೀ").replace(/¢/g, "ದಿ").replace(/zï/g, "ದ್").replace(/zË/g, "ದೌ").replace(/zÉÊ/g, "ದೈ").replace(/zÉÆÃ/g, "ದೋ").replace(/zÉÆ/g, "ದೊ").replace(/zÉÃ/g, "ದೇ").replace(/zÉ/g, "ದೆ").replace(/zÁ/g, "ದಾ").replace(/zÀÈ/g, "ದೃ").replace(/zÀÆ/g, "ದೂ").replace(/zÀÄ/g, "ದು").replace(/zÀ/g, "ದ").replace(/zsï/g, "ಧ್").replace(/zsË/g, "ಧೌ").replace(/zsÉÊ/g, "ಧೈ").replace(/zsÉÆÃ/g, "ಧೋ").replace(/zsÉÆ/g, "ಧೊ").replace(/zsÉÃ/g, "ಧೇ").replace(/zsÉ/g, "ಧೆ").replace(/zsÁ/g, "ಧಾ").replace(/zsÀÈ/g, "ಧೃ").replace(/zsÀÆ/g, "ಧೂ").replace(/zsÀÄ/g, "ಧು").replace(/zsÀ/g, "ಧ").replace(/yÃ/g, "ಥೀ").replace(/y/g, "ಥಿ").replace(/xï/g, "ಥ್").replace(/xË/g, "ಥೌ").replace(/xÉÊ/g, "ಥೈ").replace(/xÉÆÃ/g, "ಥೋ").replace(/xÉÆ/g, "ಥೊ").replace(/xÉÃ/g, "ಥೇ").replace(/xÉ/g, "ಥೆ").replace(/xÁ/g, "ಥಾ").replace(/xÀÈ/g, "ಥೃ").replace(/xÀÆ/g, "ಥೂ").replace(/xÀÄ/g, "ಥು").replace(/xÀ/g, "ಥ").replace(/wÃ/g, "ತೀ").replace(/w/g, "ತಿ").replace(/vï/g, "ತ್").replace(/vË/g, "ತೌ").replace(/vÉÊ/g, "ತೈ").replace(/vÉÆÃ/g, "ತೋ").replace(/vÉÆ/g, "ತೊ").replace(/vÉÃ/g, "ತೇ").replace(/vÉ/g, "ತೆ").replace(/vÁ/g, "ತಾ").replace(/vÀÈ/g, "ತೃ").replace(/vÀÆ/g, "ತೂ").replace(/vÀÄ/g, "ತು").replace(/vÀ/g, "ತ").replace(/uï/g, "ಣ್").replace(/uË/g, "ಣೌ").replace(/uÉÊ/g, "ಣೈ").replace(/uÉÆÃ/g, "ಣೋ").replace(/uÉÆ/g, "ಣೊ").replace(/uÉÃ/g, "ಣೇ").replace(/uÉ/g, "ಣೆ").replace(/uÁ/g, "ಣಾ").replace(/tÈ/g, "ಣೃ").replace(/tÆ/g, "ಣೂ").replace(/tÄ/g, "ಣು").replace(/tÂÃ/g, "ಣೀ").replace(/tÂ/g, "ಣಿ").replace(/t/g, "ಣ").replace(/rüÃ/g, "ಢೀ").replace(/rü/g, "ಢಿ").replace(/rÃ/g, "ಡೀ").replace(/r/g, "ಡಿ").replace(/qï/g, "ಡ್").replace(/qË/g, "ಡೌ").replace(/qÉÊ/g, "ಡೈ").replace(/qÉÆÃ/g, "ಡೋ").replace(/qÉÆ/g, "ಡೊ").replace(/qÉÃ/g, "ಡೇ").replace(/qÉ/g, "ಡೆ").replace(/qÁ/g, "ಡಾ").replace(/qÀÈ/g, "ಡೃ").replace(/qÀÆ/g, "ಡೂ").replace(/qÀÄ/g, "ಡು").replace(/qÀ/g, "ಡ").replace(/qsï/g, "ಢ್").replace(/qsË/g, "ಢೌ").replace(/qsÉÊ/g, "ಢೈ").replace(/qsÉÆÃ/g, "ಢೋ").replace(/qsÉÆ/g, "ಢೊ").replace(/qsÉÃ/g, "ಢೇ").replace(/qsÉ/g, "ಢೆ").replace(/qsÁ/g, "ಢಾ").replace(/qsÀÈ/g, "ಢೃ").replace(/qsÀÆ/g, "ಢೂ").replace(/qsÀÄ/g, "ಢು").replace(/qsÀ/g, "ಢ").replace(/pÃ/g, "ಠೀ").replace(/p/g, "ಠಿ").replace(/oï/g, "ಠ್").replace(/oË/g, "ಠೌ").replace(/oÉÊ/g, "ಠೈ").replace(/oÉÆÃ/g, "ಠೋ").replace(/oÉÆ/g, "ಠೊ").replace(/oÉÃ/g, "ಠೇ").replace(/oÉ/g, "ಠೆ").replace(/oÁ/g, "ಠಾ").replace(/oÀÈ/g, "ಠೃ").replace(/oÀÆ/g, "ಠೂ").replace(/oÀÄ/g, "ಠು").replace(/oÀ/g, "ಠ").replace(/nÃ/g, "ಟೀ").replace(/n/g, "ಟಿ").replace(/mï/g, "ಟ್").replace(/mË/g, "ಟೌ").replace(/mÉÊ/g, "ಟೈ").replace(/mÉÆÃ/g, "ಟೋ").replace(/mÉÆ/g, "ಟೊ").replace(/mÉÃ/g, "ಟೇ").replace(/mÉ/g, "ಟೆ").replace(/mÁ/g, "ಟಾ").replace(/lÈ/g, "ಟೃ").replace(/lÆ/g, "ಟೂ").replace(/lÄ/g, "ಟು").replace(/l/g, "ಟ").replace(/kï/g, "ಞ್").replace(/k/g, "ಞ").replace(/jÃ/g, "ರೀ").replace(/jhÄÃ/g, "ಝೀ").replace(/jhÄ/g, "ಝಿ").replace(/j/g, "ರಿ").replace(/gï/g, "ರ್").replace(/gË/g, "ರೌ").replace(/gÉÊ/g, "ರೈ").replace(/gÉÆÃ/g, "ರೋ").replace(/gÉÆ/g, "ರೊ").replace(/gÉÃ/g, "ರೇ").replace(/gÉhÆÃ/g, "ಝೋ").replace(/gÉhÆ/g, "ಝೊ").replace(/gÉhÄÊ/g, "ಝೈ").replace(/gÉhÄÃ/g, "ಝೇ").replace(/gÉhÄ/g, "ಝೆ").replace(/gÉ/g, "ರೆ").replace(/gÁ/g, "ರಾ").replace(/gÀÈ/g, "ರೃ").replace(/gÀÆ/g, "ರೂ").replace(/gÀÄ/g, "ರು").replace(/gÀhÄÈ/g, "ಝೃ").replace(/gÀhÄÆ/g, "ಝೂ").replace(/gÀhÄÄ/g, "ಝು").replace(/gÀhÄ/g, "ಝ").replace(/gÀhiï/g, "ಝ್").replace(/gÀhiË/g, "ಝೌ").replace(/gÀhiÁ/g, "ಝಾ").replace(/gÀ/g, "ರ").replace(/fÃ/g, "ಜೀ").replace(/f/g, "ಜಿ").replace(/eï/g, "ಜ್").replace(/eË/g, "ಜೌ").replace(/eÉÊ/g, "ಜೈ").replace(/eÉÆÃ/g, "ಜೋ").replace(/eÉÆ/g, "ಜೊ").replace(/eÉÃ/g, "ಜೇ").replace(/eÉ/g, "ಜೆ").replace(/eÁ/g, "ಜಾ").replace(/dÈ/g, "ಜೃ").replace(/dÆ/g, "ಜೂ").replace(/dÄ/g, "ಜು").replace(/d/g, "ಜ").replace(/cÃ/g, "ಛೀ").replace(/c/g, "ಛಿ").replace(/bï/g, "ಛ್").replace(/bË/g, "ಛೌ").replace(/bÉÊ/g, "ಛೈ").replace(/bÉÆÃ/g, "ಛೋ").replace(/bÉÆ/g, "ಛೊ").replace(/bÉÃ/g, "ಛೇ").replace(/bÉ/g, "ಛೆ").replace(/bÁ/g, "ಛಾ").replace(/bÀÈ/g, "ಛೃ").replace(/bÀÆ/g, "ಛೂ").replace(/bÀÄ/g, "ಛು").replace(/bÀ/g, "ಛ").replace(/aÃ/g, "ಚೀ").replace(/a/g, "ಚಿ").replace(/Zï/g, "ಚ್").replace(/ZË/g, "ಚೌ").replace(/ZÉÊ/g, "ಚೈ").replace(/ZÉÆÃ/g, "ಚೋ").replace(/ZÉÆ/g, "ಚೊ").replace(/ZÉÃ/g, "ಚೇ").replace(/ZÉ/g, "ಚೆ").replace(/ZÁ/g, "ಚಾ").replace(/ZÀÈ/g, "ಚೃ").replace(/ZÀÆ/g, "ಚೂ").replace(/ZÀÄ/g, "ಚು").replace(/ZÀ/g, "ಚ").replace(/Yï/g, "ಙ್").replace(/Y/g, "ಙ").replace(/XÃ/g, "ಘೀ").replace(/X/g, "ಘಿ").replace(/Wï/g, "ಘ್").replace(/WË/g, "ಘೌ").replace(/WÉÊ/g, "ಘೈ").replace(/WÉÆÃ/g, "ಘೋ").replace(/WÉÆ/g, "ಘೊ").replace(/WÉÃ/g, "ಘೇ").replace(/WÉ/g, "ಘೆ").replace(/WÁ/g, "ಘಾ").replace(/WÀÈ/g, "ಘೃ").replace(/WÀÆ/g, "ಘೂ").replace(/WÀÄ/g, "ಘು").replace(/WÀ/g, "ಘ").replace(/VÃ/g, "ಗೀ").replace(/V/g, "ಗಿ").replace(/Uï/g, "ಗ್").replace(/UË/g, "ಗೌ").replace(/UÉÊ/g, "ಗೈ").replace(/UÉÆÃ/g, "ಗೋ").replace(/UÉÆ/g, "ಗೊ").replace(/UÉÃ/g, "ಗೇ").replace(/UÉ/g, "ಗೆ").replace(/UÁ/g, "ಗಾ").replace(/UÀÈ/g, "ಗೃ").replace(/UÀÆ/g, "ಗೂ").replace(/UÀÄ/g, "ಗು").replace(/UÀ/g, "ಗ").replace(/TÃ/g, "ಖೀ").replace(/T/g, "ಖಿ").replace(/Sï/g, "ಖ್").replace(/SË/g, "ಖೌ").replace(/SÉÊ/g, "ಖೈ").replace(/SÉÆÃ/g, "ಖೋ").replace(/SÉÆ/g, "ಖೊ").replace(/SÉÃ/g, "ಖೇ").replace(/SÉ/g, "ಖೆ").replace(/SÁ/g, "ಖಾ").replace(/RÈ/g, "ಖೃ").replace(/RÆ/g, "ಖೂ").replace(/RÄ/g, "ಖು").replace(/R/g, "ಖ").replace(/QÃ/g, "ಕೀ").replace(/Q/g, "ಕಿ").replace(/Pï/g, "ಕ್").replace(/PË/g, "ಕೌ").replace(/PÉÊ/g, "ಕೈ").replace(/PÉÆÃ/g, "ಕೋ").replace(/PÉÆ/g, "ಕೊ").replace(/PÉÃ/g, "ಕೇ").replace(/PÉ/g, "ಕೆ").replace(/PÁ/g, "ಕಾ").replace(/PÀÈ/g, "ಕೃ").replace(/PÀÆ/g, "ಕೂ").replace(/PÀÄ/g, "ಕು").replace(/PÀ/g, "ಕ").replace(/O/g, "ಔ").replace(/N/g, "ಓ").replace(/M/g, "ಒ").replace(/L/g, "ಐ").replace(/K/g, "ಏ").replace(/J/g, "ಎ").replace(/IÆ2/g, "ೠ").replace(/IÄ/g, "ಋ").replace(/H/g, "ಊ").replace(/G/g, "ಉ").replace(/F/g, "ಈ").replace(/E/g, "ಇ").replace(/D/g, "ಆ").replace(/C/g, "ಅ").replace(/AiÉÆÃ/g, "ಯೋ").replace(/AiÉÆ/g, "ಯೊ").replace(/AiÉÄÊ/g, "ಯೈ").replace(/AiÉÄÃ/g, "ಯೇ").replace(/AiÉÄ/g, "ಯೆ").replace(/AiÀÄÈ/g, "ಯೃ").replace(/AiÀÄÆ/g, "ಯೂ").replace(/AiÀÄÄ/g, "ಯು").replace(/AiÀÄ/g, "ಯ").replace(/AiÀiï/g, "ಯ್").replace(/AiÀiË/g, "ಯೌ").replace(/AiÀiÁ/g, "ಯಾ").replace(/0iÉÆÃ/g, "ಯೋ").replace(/0iÉÆ/g, "ಯೊ").replace(/0iÉÄÊ/g, "ಯೈ").replace(/0iÉÄÃ/g, "ಯೇ").replace(/0iÉÄ/g, "ಯೆ").replace(/0iÀÄÈ/g, "ಯೃ").replace(/0iÀÄÆ/g, "ಯೂ").replace(/0iÀÄÄ/g, "ಯು").replace(/0iÀÄ/g, "ಯ").replace(/0iÀiï/g, "ಯ್").replace(/0iÀiË/g, "ಯೌ").replace(/0iÀiÁ/g, "ಯಾ");
}
Kn.prototype._REGEX_ASCII_ZWNJ = new RegExp('(ï)([JRmpL°¬aej0μqC§Sªkv¿y¢¼lAbFU£E®¾±DGKPMQZo²¹z¶½¨»urT¦gndNfwWI¤¯tHc«µO¸VYºx¥©X])', 'g');
Kn.prototype._REGEX_ASCII_VATTAKSHARA_3 = new RegExp('([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])', 'g');
Kn.prototype._REGEX_ASCII_VATTAKSHARA_2 = new RegExp('([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])', 'g');
Kn.prototype._REGEX_ASCII_VATTAKSHARA_1 = new RegExp('([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])', 'g');
Kn.prototype._u2a_deerga_handle = function(txt) {
    txt = txt.replace(         /(Ã)([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])/g,          function(match, g1, g2, g3, g4) {             return g2 + g3 + g4 + g1;         }    );
    txt = txt.replace(         /(Ã)([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])/g,          function(match, g1, g2, g3) {             return g2 + g3 + g1;         }    );
    txt = txt.replace(         /(Ã)([ÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæèéêëìíîùú])/g,          function(match, g1, g2) {             return g2 + g1;         }    );
    return txt;}
Kn.prototype._replace_vattakshara =function(txt){
    return txt.replace(/Ì/g, "್ಕ").replace(/Í/g, "್ಖ").replace(/Î/g, "್ಗ").replace(/Ï/g, "್ಘ").replace(/Ð/g, "್ಙ").replace(/Ñ/g, "್ಚ").replace(/Ò/g, "್ಛ").replace(/Ó/g, "್ಜ").replace(/Ô/g, "್ಝ").replace(/Õ/g, "್ಞ").replace(/Ö/g, "್ಟ").replace(/×/g, "್ಠ").replace(/Ø/g, "್ಡ").replace(/Ù/g, "್ಢ").replace(/Ú/g, "್ಣ").replace(/Û/g, "್ತ").replace(/Ü/g, "್ಥ").replace(/Ý/g, "್ದ").replace(/Þ/g, "್ಧ").replace(/ß/g, "್ನ").replace(/à/g, "್ಪ").replace(/á/g, "್ಫ").replace(/â/g, "್ಬ").replace(/ã/g, "್ಭ").replace(/ä/g, "್ಮ").replace(/å/g, "್ಯ").replace(/æ/g, "್ರ").replace(/è/g, "್ಲ").replace(/é/g, "್ವ").replace(/ê/g, "್ಶ").replace(/ë/g, "್ಷ").replace(/ì/g, "್ಸ").replace(/í/g, "್ಹ").replace(/î/g, "್ಳ").replace(/ù/g, "್ಱ").replace(/ú/g, "್ೞ").replace(/ø/g, "ೃ").replace(/ñ/g, "ೄ").replace(/„/g, "ಽ").replace(/ó/g, "಼");
}
Kn.prototype._a2u_deerga_handle = function(txt) {    return txt.replace(        /([ಿೆೊ])(Ã)/g,         function(match, g1, g2) {            if (g1 == 'ಿ') { return 'ೀ'; }            if (g1 == 'ೆ') { return 'ೇ'; }            if (g1 == 'ೊ') { return 'ೋ'; }        });}
Kn.prototype._REGEX_UNI_ASCII_ARKAVATTU = new RegExp('([ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?ð', 'g');
Kn.prototype._REGEX_UNI_REPH_BEFORE_CONVERT = new RegExp('[^್]?([ರ])(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?', 'g');
Kn.prototype._REGEX_UNI_REPH_WITHOUT_ZWJ = new RegExp('^([ರ])(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?$', 'g');
Kn.prototype._REGEX_UNI_VATTAKSHARA = new RegExp('^([ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])‍?(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?(್[ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?$', 'g');
Kn.prototype._REGEX_UNI_VOWEL_PLUS_ANUSVARA_VISARGA = new RegExp('^([ಅಆಇಈಉಊಋೠಎಏಐಒಓಔಅಂಅಃ])([ಂಃ])$', 'g');
Kn.prototype._REGEX_UNI_CONSONANT_PLUS_VOWEL = new RegExp('^([ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಱೞ])([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?([್ಾಿೀುೂೃೆೇೈೊೋೌಂಃ])?$', 'g');
Kn.prototype._anusvara_visarga = ["\u0c82", "\u0c83"];
Kn.prototype._vowels = ["\u0c85", "\u0c86", "\u0c87", "\u0c88", "\u0c89", "\u0c8a", "\u0c8b", "\u0ce0", "\u0c8e", "\u0c8f", "\u0c90", "\u0c92", "\u0c93", "\u0c94", "\u0c85\u0c82", "\u0c85\u0c83"];
Kn.prototype._halant = "\u0ccd";
Kn.prototype._consonants = ["\u0c95", "\u0c96", "\u0c97", "\u0c98", "\u0c99", "\u0c9a", "\u0c9b", "\u0c9c", "\u0c9d", "\u0c9e", "\u0c9f", "\u0ca0", "\u0ca1", "\u0ca2", "\u0ca3", "\u0ca4", "\u0ca5", "\u0ca6", "\u0ca7", "\u0ca8", "\u0caa", "\u0cab", "\u0cac", "\u0cad", "\u0cae", "\u0caf", "\u0cb0", "\u0cb2", "\u0cb5", "\u0cb6", "\u0cb7", "\u0cb8", "\u0cb9", "\u0cb3", "\u0cb1", "\u0cde"];
Kn.prototype._dep_vowels = ["\u0ccd", "\u0cbe", "\u0cbf", "\u0cc0", "\u0cc1", "\u0cc2", "\u0cc3", "\u0cc6", "\u0cc7", "\u0cc8", "\u0cca", "\u0ccb", "\u0ccc", "\u0c82", "\u0c83"];
Kn.prototype._u2a_map = {"\u0c82": "A", "\u0c83": "B", "\u0c85\u0c82": "CA", "\u0c85\u0c83": "CB", "\u0c85": "C", "\u0c86": "D", "\u0c87": "E", "\u0c88": "F", "\u0c89": "G", "\u0c8a": "H", "\u0c8b": "I\u00c4", "\u0ce0": "I\u00c62", "\u0c8e": "J", "\u0c8f": "K", "\u0c90": "L", "\u0c92": "M", "\u0c93": "N", "\u0c94": "O", "\u0c95\u0ccd": "P\u00ef", "\u0c95": "P\u00c0", "\u0c95\u0cbe": "P\u00c1", "\u0c95\u0cbf": "Q", "\u0c95\u0cc0": "Q\u00c3", "\u0c95\u0cc1": "P\u00c0\u00c4", "\u0c95\u0cc2": "P\u00c0\u00c6", "\u0c95\u0cc3": "P\u00c0\u00c8", "\u0c95\u0cc6": "P\u00c9", "\u0c95\u0cc7": "P\u00c9\u00c3", "\u0c95\u0cc8": "P\u00c9\u00ca", "\u0c95\u0cca": "P\u00c9\u00c6", "\u0c95\u0ccb": "P\u00c9\u00c6\u00c3", "\u0c95\u0ccc": "P\u00cb", "\u0c96\u0ccd": "S\u00ef", "\u0c96": "R", "\u0c96\u0cbe": "S\u00c1", "\u0c96\u0cbf": "T", "\u0c96\u0cc0": "T\u00c3", "\u0c96\u0cc1": "R\u00c4", "\u0c96\u0cc2": "R\u00c6", "\u0c96\u0cc3": "R\u00c8", "\u0c96\u0cc6": "S\u00c9", "\u0c96\u0cc7": "S\u00c9\u00c3", "\u0c96\u0cc8": "S\u00c9\u00ca", "\u0c96\u0cca": "S\u00c9\u00c6", "\u0c96\u0ccb": "S\u00c9\u00c6\u00c3", "\u0c96\u0ccc": "S\u00cb", "\u0c97\u0ccd": "U\u00ef", "\u0c97": "U\u00c0", "\u0c97\u0cbe": "U\u00c1", "\u0c97\u0cbf": "V", "\u0c97\u0cc0": "V\u00c3", "\u0c97\u0cc1": "U\u00c0\u00c4", "\u0c97\u0cc2": "U\u00c0\u00c6", "\u0c97\u0cc3": "U\u00c0\u00c8", "\u0c97\u0cc6": "U\u00c9", "\u0c97\u0cc7": "U\u00c9\u00c3", "\u0c97\u0cc8": "U\u00c9\u00ca", "\u0c97\u0cca": "U\u00c9\u00c6", "\u0c97\u0ccb": "U\u00c9\u00c6\u00c3", "\u0c97\u0ccc": "U\u00cb", "\u0c98\u0ccd": "W\u00ef", "\u0c98": "W\u00c0", "\u0c98\u0cbe": "W\u00c1", "\u0c98\u0cbf": "X", "\u0c98\u0cc0": "X\u00c3", "\u0c98\u0cc1": "W\u00c0\u00c4", "\u0c98\u0cc2": "W\u00c0\u00c6", "\u0c98\u0cc3": "W\u00c0\u00c8", "\u0c98\u0cc6": "W\u00c9", "\u0c98\u0cc7": "W\u00c9\u00c3", "\u0c98\u0cc8": "W\u00c9\u00ca", "\u0c98\u0cca": "W\u00c9\u00c6", "\u0c98\u0ccb": "W\u00c9\u00c6\u00c3", "\u0c98\u0ccc": "W\u00cb", "\u0c99\u0ccd": "Y\u00ef", "\u0c99": "Y", "\u0c9a\u0ccd": "Z\u00ef", "\u0c9a": "Z\u00c0", "\u0c9a\u0cbe": "Z\u00c1", "\u0c9a\u0cbf": "a", "\u0c9a\u0cc0": "a\u00c3", "\u0c9a\u0cc1": "Z\u00c0\u00c4", "\u0c9a\u0cc2": "Z\u00c0\u00c6", "\u0c9a\u0cc3": "Z\u00c0\u00c8", "\u0c9a\u0cc6": "Z\u00c9", "\u0c9a\u0cc7": "Z\u00c9\u00c3", "\u0c9a\u0cc8": "Z\u00c9\u00ca", "\u0c9a\u0cca": "Z\u00c9\u00c6", "\u0c9a\u0ccb": "Z\u00c9\u00c6\u00c3", "\u0c9a\u0ccc": "Z\u00cb", "\u0c9b\u0ccd": "b\u00ef", "\u0c9b": "b\u00c0", "\u0c9b\u0cbe": "b\u00c1", "\u0c9b\u0cbf": "c", "\u0c9b\u0cc0": "c\u00c3", "\u0c9b\u0cc1": "b\u00c0\u00c4", "\u0c9b\u0cc2": "b\u00c0\u00c6", "\u0c9b\u0cc3": "b\u00c0\u00c8", "\u0c9b\u0cc6": "b\u00c9", "\u0c9b\u0cc7": "b\u00c9\u00c3", "\u0c9b\u0cc8": "b\u00c9\u00ca", "\u0c9b\u0cca": "b\u00c9\u00c6", "\u0c9b\u0ccb": "b\u00c9\u00c6\u00c3", "\u0c9b\u0ccc": "b\u00cb", "\u0c9c\u0ccd": "e\u00ef", "\u0c9c": "d", "\u0c9c\u0cbe": "e\u00c1", "\u0c9c\u0cbf": "f", "\u0c9c\u0cc0": "f\u00c3", "\u0c9c\u0cc1": "d\u00c4", "\u0c9c\u0cc2": "d\u00c6", "\u0c9c\u0cc3": "d\u00c8", "\u0c9c\u0cc6": "e\u00c9", "\u0c9c\u0cc7": "e\u00c9\u00c3", "\u0c9c\u0cc8": "e\u00c9\u00ca", "\u0c9c\u0cca": "e\u00c9\u00c6", "\u0c9c\u0ccb": "e\u00c9\u00c6\u00c3", "\u0c9c\u0ccc": "e\u00cb", "\u0c9d\u0ccd": "g\u00c0hi\u00ef", "\u0c9d": "g\u00c0h\u00c4", "\u0c9d\u0cbe": "g\u00c0hi\u00c1", "\u0c9d\u0cbf": "jh\u00c4", "\u0c9d\u0cc0": "jh\u00c4\u00c3", "\u0c9d\u0cc1": "g\u00c0h\u00c4\u00c4", "\u0c9d\u0cc2": "g\u00c0h\u00c4\u00c6", "\u0c9d\u0cc3": "g\u00c0h\u00c4\u00c8", "\u0c9d\u0cc6": "g\u00c9h\u00c4", "\u0c9d\u0cc7": "g\u00c9h\u00c4\u00c3", "\u0c9d\u0cc8": "g\u00c9h\u00c4\u00ca", "\u0c9d\u0cca": "g\u00c9h\u00c6", "\u0c9d\u0ccb": "g\u00c9h\u00c6\u00c3", "\u0c9d\u0ccc": "g\u00c0hi\u00cb", "\u0c9e\u0ccd": "k\u00ef", "\u0c9e": "k", "\u0c9f\u0ccd": "m\u00ef", "\u0c9f": "l", "\u0c9f\u0cbe": "m\u00c1", "\u0c9f\u0cbf": "n", "\u0c9f\u0cc0": "n\u00c3", "\u0c9f\u0cc1": "l\u00c4", "\u0c9f\u0cc2": "l\u00c6", "\u0c9f\u0cc3": "l\u00c8", "\u0c9f\u0cc6": "m\u00c9", "\u0c9f\u0cc7": "m\u00c9\u00c3", "\u0c9f\u0cc8": "m\u00c9\u00ca", "\u0c9f\u0cca": "m\u00c9\u00c6", "\u0c9f\u0ccb": "m\u00c9\u00c6\u00c3", "\u0c9f\u0ccc": "m\u00cb", "\u0ca0\u0ccd": "o\u00ef", "\u0ca0": "o\u00c0", "\u0ca0\u0cbe": "o\u00c1", "\u0ca0\u0cbf": "p", "\u0ca0\u0cc0": "p\u00c3", "\u0ca0\u0cc1": "o\u00c0\u00c4", "\u0ca0\u0cc2": "o\u00c0\u00c6", "\u0ca0\u0cc3": "o\u00c0\u00c8", "\u0ca0\u0cc6": "o\u00c9", "\u0ca0\u0cc7": "o\u00c9\u00c3", "\u0ca0\u0cc8": "o\u00c9\u00ca", "\u0ca0\u0cca": "o\u00c9\u00c6", "\u0ca0\u0ccb": "o\u00c9\u00c6\u00c3", "\u0ca0\u0ccc": "o\u00cb", "\u0ca1\u0ccd": "q\u00ef", "\u0ca1": "q\u00c0", "\u0ca1\u0cbe": "q\u00c1", "\u0ca1\u0cbf": "r", "\u0ca1\u0cc0": "r\u00c3", "\u0ca1\u0cc1": "q\u00c0\u00c4", "\u0ca1\u0cc2": "q\u00c0\u00c6", "\u0ca1\u0cc3": "q\u00c0\u00c8", "\u0ca1\u0cc6": "q\u00c9", "\u0ca1\u0cc7": "q\u00c9\u00c3", "\u0ca1\u0cc8": "q\u00c9\u00ca", "\u0ca1\u0cca": "q\u00c9\u00c6", "\u0ca1\u0ccb": "q\u00c9\u00c6\u00c3", "\u0ca1\u0ccc": "q\u00cb", "\u0ca2\u0ccd": "qs\u00ef", "\u0ca2": "qs\u00c0", "\u0ca2\u0cbe": "qs\u00c1", "\u0ca2\u0cbf": "r\u00fc", "\u0ca2\u0cc0": "r\u00fc\u00c3", "\u0ca2\u0cc1": "qs\u00c0\u00c4", "\u0ca2\u0cc2": "qs\u00c0\u00c6", "\u0ca2\u0cc3": "qs\u00c0\u00c8", "\u0ca2\u0cc6": "qs\u00c9", "\u0ca2\u0cc7": "qs\u00c9\u00c3", "\u0ca2\u0cc8": "qs\u00c9\u00ca", "\u0ca2\u0cca": "qs\u00c9\u00c6", "\u0ca2\u0ccb": "qs\u00c9\u00c6\u00c3", "\u0ca2\u0ccc": "qs\u00cb", "\u0ca3\u0ccd": "u\u00ef", "\u0ca3": "t", "\u0ca3\u0cbe": "u\u00c1", "\u0ca3\u0cbf": "t\u00c2", "\u0ca3\u0cc0": "t\u00c2\u00c3", "\u0ca3\u0cc1": "t\u00c4", "\u0ca3\u0cc2": "t\u00c6", "\u0ca3\u0cc3": "t\u00c8", "\u0ca3\u0cc6": "u\u00c9", "\u0ca3\u0cc7": "u\u00c9\u00c3", "\u0ca3\u0cc8": "u\u00c9\u00ca", "\u0ca3\u0cca": "u\u00c9\u00c6", "\u0ca3\u0ccb": "u\u00c9\u00c6\u00c3", "\u0ca3\u0ccc": "u\u00cb", "\u0ca4\u0ccd": "v\u00ef", "\u0ca4": "v\u00c0", "\u0ca4\u0cbe": "v\u00c1", "\u0ca4\u0cbf": "w", "\u0ca4\u0cc0": "w\u00c3", "\u0ca4\u0cc1": "v\u00c0\u00c4", "\u0ca4\u0cc2": "v\u00c0\u00c6", "\u0ca4\u0cc3": "v\u00c0\u00c8", "\u0ca4\u0cc6": "v\u00c9", "\u0ca4\u0cc7": "v\u00c9\u00c3", "\u0ca4\u0cc8": "v\u00c9\u00ca", "\u0ca4\u0cca": "v\u00c9\u00c6", "\u0ca4\u0ccb": "v\u00c9\u00c6\u00c3", "\u0ca4\u0ccc": "v\u00cb", "\u0ca5\u0ccd": "x\u00ef", "\u0ca5": "x\u00c0", "\u0ca5\u0cbe": "x\u00c1", "\u0ca5\u0cbf": "y", "\u0ca5\u0cc0": "y\u00c3", "\u0ca5\u0cc1": "x\u00c0\u00c4", "\u0ca5\u0cc2": "x\u00c0\u00c6", "\u0ca5\u0cc3": "x\u00c0\u00c8", "\u0ca5\u0cc6": "x\u00c9", "\u0ca5\u0cc7": "x\u00c9\u00c3", "\u0ca5\u0cc8": "x\u00c9\u00ca", "\u0ca5\u0cca": "x\u00c9\u00c6", "\u0ca5\u0ccb": "x\u00c9\u00c6\u00c3", "\u0ca5\u0ccc": "x\u00cb", "\u0ca6\u0ccd": "z\u00ef", "\u0ca6": "z\u00c0", "\u0ca6\u0cbe": "z\u00c1", "\u0ca6\u0cbf": "\u00a2", "\u0ca6\u0cc0": "\u00a2\u00c3", "\u0ca6\u0cc1": "z\u00c0\u00c4", "\u0ca6\u0cc2": "z\u00c0\u00c6", "\u0ca6\u0cc3": "z\u00c0\u00c8", "\u0ca6\u0cc6": "z\u00c9", "\u0ca6\u0cc7": "z\u00c9\u00c3", "\u0ca6\u0cc8": "z\u00c9\u00ca", "\u0ca6\u0cca": "z\u00c9\u00c6", "\u0ca6\u0ccb": "z\u00c9\u00c6\u00c3", "\u0ca6\u0ccc": "z\u00cb", "\u0ca7\u0ccd": "zs\u00ef", "\u0ca7": "zs\u00c0", "\u0ca7\u0cbe": "zs\u00c1", "\u0ca7\u0cbf": "\u00a2\u00fc", "\u0ca7\u0cc0": "\u00a2\u00fc\u00c3", "\u0ca7\u0cc1": "zs\u00c0\u00c4", "\u0ca7\u0cc2": "zs\u00c0\u00c6", "\u0ca7\u0cc3": "zs\u00c0\u00c8", "\u0ca7\u0cc6": "zs\u00c9", "\u0ca7\u0cc7": "zs\u00c9\u00c3", "\u0ca7\u0cc8": "zs\u00c9\u00ca", "\u0ca7\u0cca": "zs\u00c9\u00c6", "\u0ca7\u0ccb": "zs\u00c9\u00c6\u00c3", "\u0ca7\u0ccc": "zs\u00cb", "\u0ca8\u0ccd": "\u00a3\u00ef", "\u0ca8": "\u00a3\u00c0", "\u0ca8\u0cbe": "\u00a3\u00c1", "\u0ca8\u0cbf": "\u00a4", "\u0ca8\u0cc0": "\u00a4\u00c3", "\u0ca8\u0cc1": "\u00a3\u00c0\u00c4", "\u0ca8\u0cc2": "\u00a3\u00c0\u00c6", "\u0ca8\u0cc3": "\u00a3\u00c0\u00c8", "\u0ca8\u0cc6": "\u00a3\u00c9", "\u0ca8\u0cc7": "\u00a3\u00c9\u00c3", "\u0ca8\u0cc8": "\u00a3\u00c9\u00ca", "\u0ca8\u0cca": "\u00a3\u00c9\u00c6", "\u0ca8\u0ccb": "\u00a3\u00c9\u00c6\u00c3", "\u0ca8\u0ccc": "\u00a3\u00cb", "\u0caa\u0ccd": "\u00a5\u00ef", "\u0caa": "\u00a5\u00c0", "\u0caa\u0cbe": "\u00a5\u00c1", "\u0caa\u0cbf": "\u00a6", "\u0caa\u0cc0": "\u00a6\u00c3", "\u0caa\u0cc1": "\u00a5\u00c0\u00c5", "\u0caa\u0cc2": "\u00a5\u00c0\u00c7", "\u0caa\u0cc3": "\u00a5\u00c0\u00c8", "\u0caa\u0cc6": "\u00a5\u00c9", "\u0caa\u0cc7": "\u00a5\u00c9\u00c3", "\u0caa\u0cc8": "\u00a5\u00c9\u00ca", "\u0caa\u0cca": "\u00a5\u00c9\u00c7", "\u0caa\u0ccb": "\u00a5\u00c9\u00c7\u00c3", "\u0caa\u0ccc": "\u00a5\u00cb", "\u0cab\u0ccd": "\u00a5s\u00ef", "\u0cab": "\u00a5s\u00c0", "\u0cab\u0cbe": "\u00a5s\u00c1", "\u0cab\u0cbf": "\u00a6\u00fc", "\u0cab\u0cc0": "\u00a6\u00fc\u00c3", "\u0cab\u0cc1": "\u00a5s\u00c0\u00c5", "\u0cab\u0cc2": "\u00a5s\u00c0\u00c7", "\u0cab\u0cc3": "\u00a5s\u00c0\u00c8", "\u0cab\u0cc6": "\u00a5s\u00c9", "\u0cab\u0cc7": "\u00a5s\u00c9\u00c3", "\u0cab\u0cc8": "\u00a5s\u00c9\u00ca", "\u0cab\u0cca": "\u00a5s\u00c9\u00c7", "\u0cab\u0ccb": "\u00a5s\u00c9\u00c7\u00c3", "\u0cab\u0ccc": "\u00a5s\u00cb", "\u0cac\u0ccd": "\u00a8\u00ef", "\u0cac": "\u00a7", "\u0cac\u0cbe": "\u00a8\u00c1", "\u0cac\u0cbf": "\u00a9", "\u0cac\u0cc0": "\u00a9\u00c3", "\u0cac\u0cc1": "\u00a7\u00c4", "\u0cac\u0cc2": "\u00a7\u00c6", "\u0cac\u0cc3": "\u00a7\u00c8", "\u0cac\u0cc6": "\u00a8\u00c9", "\u0cac\u0cc7": "\u00a8\u00c9\u00c3", "\u0cac\u0cc8": "\u00a8\u00c9\u00ca", "\u0cac\u0cca": "\u00a8\u00c9\u00c6", "\u0cac\u0ccb": "\u00a8\u00c9\u00c6\u00c3", "\u0cac\u0ccc": "\u00a8\u00cb", "\u0cad\u0ccd": "\u00a8s\u00ef", "\u0cad": "\u00a8s\u00c0", "\u0cad\u0cbe": "\u00a8s\u00c1", "\u0cad\u0cbf": "\u00a9\u00fc", "\u0cad\u0cc0": "\u00a9\u00fc\u00c3", "\u0cad\u0cc1": "\u00a8s\u00c0\u00c4", "\u0cad\u0cc2": "\u00a8s\u00c0\u00c6", "\u0cad\u0cc3": "\u00a8s\u00c0\u00c8", "\u0cad\u0cc6": "\u00a8s\u00c9", "\u0cad\u0cc7": "\u00a8s\u00c9\u00c3", "\u0cad\u0cc8": "\u00a8s\u00c9\u00ca", "\u0cad\u0cca": "\u00a8s\u00c9\u00c6", "\u0cad\u0ccb": "\u00a8s\u00c9\u00c6\u00c3", "\u0cad\u0ccc": "\u00a8s\u00cb", "\u0cae\u0ccd": "\u00aa\u00c0i\u00ef", "\u0cae": "\u00aa\u00c0\u00c4", "\u0cae\u0cbe": "\u00aa\u00c0i\u00c1", "\u0cae\u0cbf": "\u00ab\u00c4", "\u0cae\u0cc0": "\u00ab\u00c4\u00c3", "\u0cae\u0cc1": "\u00aa\u00c0\u00c4\u00c4", "\u0cae\u0cc2": "\u00aa\u00c0\u00c4\u00c6", "\u0cae\u0cc3": "\u00aa\u00c0\u00c4\u00c8", "\u0cae\u0cc6": "\u00aa\u00c9\u00c4", "\u0cae\u0cc7": "\u00aa\u00c9\u00c4\u00c3", "\u0cae\u0cc8": "\u00aa\u00c9\u00c4\u00ca", "\u0cae\u0cca": "\u00aa\u00c9\u00c6", "\u0cae\u0ccb": "\u00aa\u00c9\u00c6\u00c3", "\u0cae\u0ccc": "\u00aa\u00c0i\u00cb", "\u0caf\u0ccd": "Ai\u00c0i\u00ef", "\u0caf": "Ai\u00c0\u00c4", "\u0caf\u0cbe": "Ai\u00c0i\u00c1", "\u0caf\u0cbf": "\u00ac\u00c4", "\u0caf\u0cc0": "\u00ac\u00c4\u00c3", "\u0caf\u0cc1": "Ai\u00c0\u00c4\u00c4", "\u0caf\u0cc2": "Ai\u00c0\u00c4\u00c6", "\u0caf\u0cc3": "Ai\u00c0\u00c4\u00c8", "\u0caf\u0cc6": "Ai\u00c9\u00c4", "\u0caf\u0cc7": "Ai\u00c9\u00c4\u00c3", "\u0caf\u0cc8": "Ai\u00c9\u00c4\u00ca", "\u0caf\u0cca": "Ai\u00c9\u00c6", "\u0caf\u0ccb": "Ai\u00c9\u00c6\u00c3", "\u0caf\u0ccc": "Ai\u00c0i\u00cb", "\u0cb0\u0ccd": "g\u00ef", "\u0cb0": "g\u00c0", "\u0cb0\u0cbe": "g\u00c1", "\u0cb0\u0cbf": "j", "\u0cb0\u0cc0": "j\u00c3", "\u0cb0\u0cc1": "g\u00c0\u00c4", "\u0cb0\u0cc2": "g\u00c0\u00c6", "\u0cb0\u0cc3": "g\u00c0\u00c8", "\u0cb0\u0cc6": "g\u00c9", "\u0cb0\u0cc7": "g\u00c9\u00c3", "\u0cb0\u0cc8": "g\u00c9\u00ca", "\u0cb0\u0cca": "g\u00c9\u00c6", "\u0cb0\u0ccb": "g\u00c9\u00c6\u00c3", "\u0cb0\u0ccc": "g\u00cb", "\u0cb2\u0ccd": "\u00af\u00ef", "\u0cb2": "\u00ae", "\u0cb2\u0cbe": "\u00af\u00c1", "\u0cb2\u0cbf": "\u00b0", "\u0cb2\u0cc0": "\u00b0\u00c3", "\u0cb2\u0cc1": "\u00ae\u00c4", "\u0cb2\u0cc2": "\u00ae\u00c6", "\u0cb2\u0cc3": "\u00ae\u00c8", "\u0cb2\u0cc6": "\u00af\u00c9", "\u0cb2\u0cc7": "\u00af\u00c9\u00c3", "\u0cb2\u0cc8": "\u00af\u00c9\u00ca", "\u0cb2\u0cca": "\u00af\u00c9\u00c6", "\u0cb2\u0ccb": "\u00af\u00c9\u00c6\u00c3", "\u0cb2\u0ccc": "\u00af\u00cb", "\u0cb5\u0ccd": "\u00aa\u00ef", "\u0cb5": "\u00aa\u00c0", "\u0cb5\u0cbe": "\u00aa\u00c1", "\u0cb5\u0cbf": "\u00ab", "\u0cb5\u0cc0": "\u00ab\u00c3", "\u0cb5\u0cc1": "\u00aa\u00c0\u00c5", "\u0cb5\u0cc2": "\u00aa\u00c0\u00c7", "\u0cb5\u0cc3": "\u00aa\u00c0\u00c8", "\u0cb5\u0cc6": "\u00aa\u00c9", "\u0cb5\u0cc7": "\u00aa\u00c9\u00c3", "\u0cb5\u0cc8": "\u00aa\u00c9\u00ca", "\u0cb5\u0cca": "\u00aa\u00c9\u00c7", "\u0cb5\u0ccb": "\u00aa\u00c9\u00c7\u00c3", "\u0cb5\u0ccc": "\u00aa\u00cb", "\u0cb6\u0ccd": "\u00b1\u00ef", "\u0cb6": "\u00b1\u00c0", "\u0cb6\u0cbe": "\u00b1\u00c1", "\u0cb6\u0cbf": "\u00b2", "\u0cb6\u0cc0": "\u00b2\u00c3", "\u0cb6\u0cc1": "\u00b1\u00c0\u00c4", "\u0cb6\u0cc2": "\u00b1\u00c0\u00c6", "\u0cb6\u0cc3": "\u00b1\u00c0\u00c8", "\u0cb6\u0cc6": "\u00b1\u00c9", "\u0cb6\u0cc7": "\u00b1\u00c9\u00c3", "\u0cb6\u0cc8": "\u00b1\u00c9\u00ca", "\u0cb6\u0cca": "\u00b1\u00c9\u00c6", "\u0cb6\u0ccb": "\u00b1\u00c9\u00c6\u00c3", "\u0cb6\u0ccc": "\u00b1\u00cb", "\u0cb7\u0ccd": "\u03bc\u00ef", "\u0cb7": "\u03bc\u00c0", "\u0cb7\u0cbe": "\u03bc\u00c1", "\u0cb7\u0cbf": "\u00b6", "\u0cb7\u0cc0": "\u00b6\u00c3", "\u0cb7\u0cc1": "\u03bc\u00c0\u00c4", "\u0cb7\u0cc2": "\u03bc\u00c0\u00c6", "\u0cb7\u0cc3": "\u03bc\u00c0\u00c8", "\u0cb7\u0cc6": "\u03bc\u00c9", "\u0cb7\u0cc7": "\u03bc\u00c9\u00c3", "\u0cb7\u0cc8": "\u03bc\u00c9\u00ca", "\u0cb7\u0cca": "\u03bc\u00c9\u00c6", "\u0cb7\u0ccb": "\u03bc\u00c9\u00c6\u00c3", "\u0cb7\u0ccc": "\u03bc\u00cb", "\u0cb8\u0ccd": "\u00b8\u00ef", "\u0cb8": "\u00b8\u00c0", "\u0cb8\u0cbe": "\u00b8\u00c1", "\u0cb8\u0cbf": "\u00b9", "\u0cb8\u0cc0": "\u00b9\u00c3", "\u0cb8\u0cc1": "\u00b8\u00c0\u00c4", "\u0cb8\u0cc2": "\u00b8\u00c0\u00c6", "\u0cb8\u0cc3": "\u00b8\u00c0\u00c8", "\u0cb8\u0cc6": "\u00b8\u00c9", "\u0cb8\u0cc7": "\u00b8\u00c9\u00c3", "\u0cb8\u0cc8": "\u00b8\u00c9\u00ca", "\u0cb8\u0cca": "\u00b8\u00c9\u00c6", "\u0cb8\u0ccb": "\u00b8\u00c9\u00c6\u00c3", "\u0cb8\u0ccc": "\u00b8\u00cb", "\u0cb9\u0ccd": "\u00ba\u00ef", "\u0cb9": "\u00ba\u00c0", "\u0cb9\u0cbe": "\u00ba\u00c1", "\u0cb9\u0cbf": "\u00bb", "\u0cb9\u0cc0": "\u00bb\u00c3", "\u0cb9\u0cc1": "\u00ba\u00c0\u00c4", "\u0cb9\u0cc2": "\u00ba\u00c0\u00c6", "\u0cb9\u0cc3": "\u00ba\u00c0\u00c8", "\u0cb9\u0cc6": "\u00ba\u00c9", "\u0cb9\u0cc7": "\u00ba\u00c9\u00c3", "\u0cb9\u0cc8": "\u00ba\u00c9\u00ca", "\u0cb9\u0cca": "\u00ba\u00c9\u00c6", "\u0cb9\u0ccb": "\u00ba\u00c9\u00c6\u00c3", "\u0cb9\u0ccc": "\u00ba\u00cb", "\u0cb3\u0ccd": "\u00bc\u00ef", "\u0cb3": "\u00bc\u00c0", "\u0cb3\u0cbe": "\u00bc\u00c1", "\u0cb3\u0cbf": "\u00bd", "\u0cb3\u0cc0": "\u00bd\u00c3", "\u0cb3\u0cc1": "\u00bc\u00c0\u00c4", "\u0cb3\u0cc2": "\u00bc\u00c0\u00c6", "\u0cb3\u0cc3": "\u00bc\u00c0\u00c8", "\u0cb3\u0cc6": "\u00bc\u00c9", "\u0cb3\u0cc7": "\u00bc\u00c9\u00c3", "\u0cb3\u0cc8": "\u00bc\u00c9\u00ca", "\u0cb3\u0cca": "\u00bc\u00c9\u00c6", "\u0cb3\u0ccb": "\u00bc\u00c9\u00c6\u00c3", "\u0cb3\u0ccc": "\u00bc\u00cb", "\u0cb1\u0ccd\u200c": "\u00be\u00f5\u00ef", "\u0cb1": "\u00be\u00f5\u00c0", "\u0cb1\u0cbe": "\u00be\u00f5\u00c1", "\u0cb1\u0cbf": "\u00be\u00c2", "\u0cb1\u0cc1": "\u00be\u00c4", "\u0cb1\u0cc2": "\u00be\u00c6", "\u0cb1\u0cc3": "\u00be\u00c8", "\u0cb1\u0cc6": "\u00be\u00f5\u00c9", "\u0cb1\u0cc7": "\u00be\u00f5\u00c9\u00c3", "\u0cb1\u0cc8": "\u00be\u00f5\u00c9\u00ca", "\u0cb1\u0cca": "\u00be\u00f5\u00c9\u00c6", "\u0cb1\u0ccb": "\u00be\u00f5\u00c9\u00c6\u00c3", "\u0cb1\u0ccc": "\u00be\u00f5\u00cb", "\u0cde\u0ccd\u200c": "\u00bf\u00f5\u00ef", "\u0cde": "\u00bf\u00f5\u00c0", "\u0cde\u0cbe": "\u00bf\u00f5\u00c1", "\u0cde\u0cbf": "\u00bf\u00c2", "\u0cde\u0cc1": "\u00bf\u00c4", "\u0cde\u0cc2": "\u00bf\u00c6", "\u0cde\u0cc3": "\u00bf\u00c8", "\u0cde\u0cc6": "\u00bf\u00f5\u00c9", "\u0cde\u0cc7": "\u00bf\u00f5\u00c9\u00c3", "\u0cde\u0cc8": "\u00bf\u00f5\u00c9\u00ca", "\u0cde\u0cca": "\u00bf\u00f5\u00c9\u00c6", "\u0cde\u0ccb": "\u00bf\u00f5\u00c9\u00c6\u00c3", "\u0cde\u0ccc": "\u00bf\u00f5\u00cb", "\u0ccd\u0c95": "\u00cc", "\u0ccd\u0c96": "\u00cd", "\u0ccd\u0c97": "\u00ce", "\u0ccd\u0c98": "\u00cf", "\u0ccd\u0c99": "\u00d0", "\u0ccd\u0c9a": "\u00d1", "\u0ccd\u0c9b": "\u00d2", "\u0ccd\u0c9c": "\u00d3", "\u0ccd\u0c9d": "\u00d4", "\u0ccd\u0c9e": "\u00d5", "\u0ccd\u0c9f": "\u00d6", "\u0ccd\u0ca0": "\u00d7", "\u0ccd\u0ca1": "\u00d8", "\u0ccd\u0ca2": "\u00d9", "\u0ccd\u0ca3": "\u00da", "\u0ccd\u0ca4": "\u00db", "\u0ccd\u0ca5": "\u00dc", "\u0ccd\u0ca6": "\u00dd", "\u0ccd\u0ca7": "\u00de", "\u0ccd\u0ca8": "\u00df", "\u0ccd\u0caa": "\u00e0", "\u0ccd\u0cab": "\u00e1", "\u0ccd\u0cac": "\u00e2", "\u0ccd\u0cad": "\u00e3", "\u0ccd\u0cae": "\u00e4", "\u0ccd\u0caf": "\u00e5", "\u0ccd\u0cb0": "\u00e6", "\u0ccd\u0cb2": "\u00e8", "\u0ccd\u0cb5": "\u00e9", "\u0ccd\u0cb6": "\u00ea", "\u0ccd\u0cb7": "\u00eb", "\u0ccd\u0cb8": "\u00ec", "\u0ccd\u0cb9": "\u00ed", "\u0ccd\u0cb3": "\u00ee", "\u0ccd\u0cb1": "\u00f9", "\u0ccd\u0cde": "\u00fa"};
Kn.prototype._kn_numbers = ["\u0ce6", "\u0ce7", "\u0ce8", "\u0ce9", "\u0cea", "\u0ceb", "\u0cec", "\u0ced", "\u0cee", "\u0cef"];
Kn.prototype._en_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
Kn.prototype._ascii_halant = "\u00ef";
Kn.prototype._ascii_consonants_start_chars = ["J", "R", "m", "p", "L", "\u00b0", "\u00ac", "a", "e", "j", "0", "\u03bc", "q", "C", "\u00a7", "S", "\u00aa", "k", "v", "\u00bf", "y", "\u00a2", "\u00bc", "l", "A", "b", "F", "U", "\u00a3", "E", "\u00ae", "\u00be", "\u00b1", "D", "G", "K", "P", "M", "Q", "Z", "o", "\u00b2", "\u00b9", "z", "\u00b6", "\u00bd", "\u00a8", "\u00bb", "u", "r", "T", "\u00a6", "g", "n", "d", "N", "f", "w", "W", "I", "\u00a4", "\u00af", "t", "H", "c", "\u00ab", "\u00b5", "O", "\u00b8", "V", "Y", "\u00ba", "x", "\u00a5", "\u00a9", "X"];
Kn.prototype._uni_zwnj = "\u200c";
Kn.prototype._uni_zwj = "\u200d";
Kn.prototype._ascii_arkavattu = "\u00f0";
Kn.prototype._uni_ra = "\u0cb0";
Kn.prototype._unicode_anusvara_visarga = function(txt){return txt.replace(/ಂ/g,"A").replace(/ಃ/g,"B");}
Kn.prototype._to_ascii_numbers = function(txt){return txt.replace(/೦/g,"0").replace(/೧/g,"1").replace(/೨/g,"2").replace(/೩/g,"3").replace(/೪/g,"4").replace(/೫/g,"5").replace(/೬/g,"6").replace(/೭/g,"7").replace(/೮/g,"8").replace(/೯/g,"9");}
Kn.prototype._to_unicode_numbers = function(txt){return txt.replace(/0/g,"೦").replace(/1/g,"೧").replace(/2/g,"೨").replace(/3/g,"೩").replace(/4/g,"೪").replace(/5/g,"೫").replace(/6/g,"೬").replace(/7/g,"೭").replace(/8/g,"೮").replace(/9/g,"೯");}
function Kn(){};
var kn = new Kn();

Kn.prototype._uni_halant = "ccd";
Kn.prototype._uni_prev_value_chars = [
    "cbe", "cbf", "cc0", "cc1",
    "cc2", "cc3", "cc4", "cc6",
    "cc7", "cc8", "cca", "ccb",
    "ccc", "ccd", "c82", "c83", "200d"
];

Kn.prototype.letters = function(txt) {
    function hexval(i) {
        return txt[i].charCodeAt(0).toString(16);
    }

    function prev_hexval(i) {
        if (txt[i-1]){
            return txt[i-1].charCodeAt(0).toString(16);
        }
        return "";
    };

    function iskn(i) {
        var re = new RegExp(/^[\u0C80-\u0CFF\u200D]+$/);
        return txt[i].match(re) ? true : false;
    };

    var l = txt.length;
    var out = [];

    for (var i=0; i<l; i++) {
        var cond = (this._uni_prev_value_chars.indexOf(hexval(i)) != -1 ||
                    prev_hexval(i) === this._uni_halant);

        if (out.length > 0 && iskn(i) && cond) {
            out[out.length-1] += txt[i];
        }
        else {
            out.push(txt[i]);
        }
    }
    return out;
};

Kn.prototype.length = function(txt){
    return this.letters(txt).length;
};


Kn.prototype._rearrange_and_replace = function(inp){
    // If inp is vowel, then no need to change
    var that = this;

    // If input letter is only vowel, then directly convert it
    if (this._vowels.indexOf(inp) !== -1){
        return this._u2a_map[inp];
    }

    // Anuswara visarga with vowels
    inp = inp.replace(this._REGEX_UNI_VOWEL_PLUS_ANUSVARA_VISARGA, function(match, g1, g2){
        return that._u2a_map[g1] + that._u2a_map[g2];
    });

    // Detect kaagunitha and convert to ASCII using Map
    inp = inp.replace(this._REGEX_UNI_CONSONANT_PLUS_VOWEL, function(match, g1, g2, g3){
        return that._substitute_ascii(g1, [g2, g3], []);
    });

    // Arkavattu vs Ra vattu
    // If ZWJ is not used then use Arkavattu, First vattakshara after Ra
    // is treated as new Base, and add arkavattu in the end
    inp = inp.replace(this._REGEX_UNI_REPH_WITHOUT_ZWJ,
                      function(match, g1, g2, g3, g4, g5, g6){
                          // First vattakshara will become base
                          var base = g2.replace(that._halant, "");
                          var append_chars = [that._ascii_arkavattu];
                          return that._substitute_ascii(base, [g5, g6], [g3, g4], append_chars);
                      });

    // Detect Vattakshara(with ZWJ or Without), Ignore ZWJ in match
    inp = inp.replace(this._REGEX_UNI_VATTAKSHARA,
                      function(match, g1, g2, g3, g4, g5, g6){
                          return that._substitute_ascii(g1, [g5, g6], [g2, g3, g4]);
                      });
    return inp;
}


Kn.prototype._substitute_ascii = function(base, dep_vowel, vattaksharagalu, append_chars){
    var op = "";
    if (dep_vowel[0] === undefined){
        // Dependent vowel is not present, that means only consonant
        // convert it directly using Map
        op += this._u2a_map[base];
    }
    else{
        if (this._anusvara_visarga.indexOf(dep_vowel[0]) === -1){
            // If first dependent vowel is not Anuswara and visarga then
            // join base and dep vowel since in ASCII vattakshara is added in
            // the end after dep vowel(In Unicode it is dep vowel + vattakshara)
            op += this._u2a_map[base + dep_vowel[0]];
        }
        else{
            // Only base now, anuswara visarga will be added later
            op += this._u2a_map[base];
        }
    }

    // If Vattaksharagalu exists, replace with ASCII vattakshara and add
    for (var i=0; i<vattaksharagalu.length; i++){
        if (vattaksharagalu[i] !== undefined){
            op += this._u2a_map[vattaksharagalu[i]];
        }
    }

    // Previously not added anuswara visarga, add it now since vattakshara
    // already added.
    if (this._anusvara_visarga.indexOf(dep_vowel[0]) !== -1){
        op += this._u2a_map[dep_vowel[0]];
    }

    // If contains second dep vowel add it to the converted
    if (dep_vowel[1] !== undefined){
        op += this._u2a_map[dep_vowel[1]];
    }

    if (append_chars !== undefined) {
        op += append_chars.join("");
    }
    return op;
}

Kn.prototype._ascii_to_unicode_word = function (txt, english_numbers){
    that = this;

    // Insert ZWNJ if required before converting anything else
    txt = txt.replace(this._REGEX_ASCII_ZWNJ,
                      function(match, g1, g2) {
                          return g1 + that._uni_zwnj + g2;
                      });

    // Replace all which can be replaced using Maps
    txt = this._replace_from_map(txt);

    // Identify dependent vowel followed by 3 level vattaksharas
    // Replace vattaksharas with equivalant unicode combination and
    // reorg and move dep vowel to end
    txt = txt.replace(this._REGEX_ASCII_VATTAKSHARA_3,
                      function(match, g1, g2, g3, g4){
                          return g2 + g3 + g4 + g1;
                      });

    // Identify dependent vowel followed by 2 level vattaksharas
    // Replace vattaksharas with equivalant unicode combination and
    // reorg and move dep vowel to end
    txt = txt.replace(this._REGEX_ASCII_VATTAKSHARA_2,
                      function(match, g1, g2, g3){
                          return g2 + g3 + g1;
                      });

    // Identify dependent vowel followed by 1 level vattaksharas
    // Replace vattaksharas with equivalant unicode combination and
    // reorg and move dep vowel to end
    txt = txt.replace(this._REGEX_ASCII_VATTAKSHARA_1,
                      function(match, g1, g2){
                          return g2 + g1;
                      });

    // If any more vattakshara pending, without dependent vowel
    // For example ಮ್ಮ
    txt = this._replace_vattakshara(txt);

    // Handle Numbers
    if (english_numbers === undefined || !english_numbers) {
        txt = this._to_unicode_numbers(txt);
    }

    txt = this._replace_a2u_anuswara_visarga(txt)

    // Now it is converted to Unicode except few left out chars

    // Handle Reph when ZWJ is used
    txt = txt.replace(this._REGEX_UNI_REPH_BEFORE_CONVERT,
                      function(match, g1, g2, g3, g4, g5, g6){
                          // Add ZWJ after Ra and retain others as is
                          var op = g1 + that._uni_zwj + g2;
                          if (g3 !== undefined){
                              op += g3;
                          }
                          if (g4 !== undefined){
                              op += g4;
                          }
                          if (g5 !== undefined){
                              op += g5;
                          }
                          if (g6 !== undefined){
                              op += g6;
                          }
                          return op;
                      });

    // Handle Reph when no ZWJ is used. If ascii arkavattu present in
    // the end, remove it and add Ra to the beginning and make first
    // char in Match as vattakshara
    txt = txt.replace(this._REGEX_UNI_ASCII_ARKAVATTU,
                      function(match, g1, g2, g3, g4, g5){
                          var op = that._uni_ra + that._halant + g1;
                          if (g2 !== undefined){
                              op += g2;
                          }
                          if (g3 !== undefined){
                              op += g3;
                          }
                          if (g4 !== undefined){
                              op += g4;
                          }
                          if (g5 !== undefined){
                              op += g5;
                          }

                          return op;
                      });

    return txt;
}

Kn.prototype._a2u_post_process = function(txt) {
    return txt.replace("É", "ಕೆ"[1]);
}

Kn.prototype.ascii_to_unicode = function (txt, english_numbers, remove_extra_space){
    if (remove_extra_space) {
        txt = txt.replace(/[ \t]+/g,' ').trim();
    }
    var words = txt.split(" ");
    var op = [];
    var l = words.length;
    for (var i=0; i<l; i++) {
        var wl = words[i].length;
        if (wl > 0 && words[i][0] === "$" && words[i][wl-1] === "$") {
            op.push(words[i].replace(/^\$/g, "").replace(/\$$/g, ""));
        } else {
            op.push(this._ascii_to_unicode_word(words[i], english_numbers));
        }
    }

    txt = this._a2u_deerga_handle(op.join(" "));
    return this._a2u_post_process(txt);
}

Kn.prototype._unicode_to_ascii_word = function(txt, english_numbers){
    var converted = [];
    var that = this;
    // Split into Kn letters and convert each letter to ASCII
    this.letters(txt).map(function(letter){
        converted.push(that._rearrange_and_replace(letter));
    });

    // Replace Anuswara and Visarga with ASCII chars
    txt = this._unicode_anusvara_visarga(converted.join(""));

    // Handle Numbers
    // No special handling required, Font will change the look and feel
    // of number in ASCII
    txt = this._to_ascii_numbers(txt)

    // ZWNJ
    // Since ZWNJ is not available in Map, it is not replaced
    // rest of the letters already replaced. We can remove this
    // char from output since in ASCII chars will not mix
    txt = txt.replace(/\u200c/g, "");

    // Handle Reph

    // Handle ZWJ and ZWNJ
    return txt;
}

Kn.prototype._u2a_post_process = function(txt) {
    return txt.replace("ÈÌ", "Ìø");
}

Kn.prototype.unicode_to_ascii = function (txt, english_numbers, remove_extra_space){
    if (remove_extra_space) {
        txt = txt.replace(/[ \t]+/g,' ').trim();
    }
    var words = txt.split(" ");
    var op = [];
    var l = words.length;
    for (var i=0; i<l; i++) {
        var wl = words[i].length;
        if (wl > 0 && words[i][0] === "$" && words[i][wl-1] === "$") {
            op.push(words[i].replace(/^\$/g, "").replace(/\$$/g, ""));
        } else {
            op.push(this._unicode_to_ascii_word(words[i], english_numbers));
        }
    }
    txt = this._u2a_deerga_handle(op.join(" "));
    return this._u2a_post_process(txt);
}
