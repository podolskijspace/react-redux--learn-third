const newKey = () => {
  let newKey = '';

  for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
    switch (Math.floor(Math.random() * 36) + 1) {
      case 1:
        newKey += 'a';
        break;
      case 2:
        newKey += 'b';
        break;
      case 3:
        newKey += 'c';
        break;
      case 4:
        newKey += 'd';
        break;
      case 5:
        newKey += 'e';
        break;
      case 6:
        newKey += 'f';
        break;
      case 7:
        newKey += 'g';
        break;
      case 8:
        newKey += 'h';
        break;
      case 9:
        newKey += 'i';
        break;
      case 10:
        newKey += 'j';
        break;
      case 11:
        newKey += 'k';
        break;
      case 12:
        newKey += 'l';
        break;
      case 13:
        newKey += 'm';
        break;
      case 14:
        newKey += 'n';
        break;
      case 15:
        newKey += 'o';
        break;
      case 16:
        newKey += 'p';
        break;
      case 17:
        newKey += 'q';
        break;
      case 18:
        newKey += 'r';
        break;
      case 19:
        newKey += 's';
        break;
      case 20:
        newKey += 't';
        break;
      case 21:
        newKey += 'u';
        break;
      case 22:
        newKey += 'v';
        break;
      case 23:
        newKey += 'w';
        break;
      case 24:
        newKey += 'x';
        break;
      case 25:
        newKey += 'y';
        break;
      case 26:
        newKey += 'z';
        break;
      case 27:
        newKey += '0';
        break;
      case 28:
        newKey += '1';
        break;
      case 29:
        newKey += '2';
        break;
      case 30:
        newKey += '3';
        break;
      case 31:
        newKey += '4';
        break;
      case 32:
        newKey += '5';
        break;
      case 33:
        newKey += '6';
        break;
      case 34:
        newKey += '7';
        break;
      case 35:
        newKey += '8';
        break;
      case 36:
        newKey += '9';
        break;
      default:
    }
  }
  return newKey;
}

export default newKey;