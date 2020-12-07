var word = "Tha";
var AlphaBeta = [];
Predict(word,AlphaBeta);

function Predict(word)
{
    var stringLength = 0;
    stringLength = word.length;
    letter = word.charAt(stringLength - 1);
    
    if (letter == "a" || letter == "A")
    {
        AlphaBeta = [['t',0.18],['n',0.14],['l',0.13],['r',0.11],['s',0.06],['c',0.06]
                    ,['b',0.05],['m',0.04],['d',0.04],['p',0.04],['g',0.03],['i',0.03]
                    ,['u',0.02],['v',0.02],['y',0.02],['k',0.01],['w',0.009],['f',0.009]
                    ,['e',0.007],['z',0.005],['h',0.004],['x',0.003],['j',0.0009]
                    ,['o',0.0009],['q',0.0008],['a',0.0006]];
        return(AlphaBeta);
    }
    else if (letter == "b" || letter == "B")
    {
        AlphaBeta = [['l',0.19],['e',0.15],['a',0.14],['o',0.12],['i',0.12],['r',0.09]
                    ,['u',0.08],['s',0.04],['b',0.03],['y',0.01],['t',0.008],['j',0.004]
                    ,['d',0.004],['m',0.003],['c',0.003],['n',0.003],['f',0.002],['v',0.002]
                    ,['h',0.001],['p',0.001],['w',0.0006],['g',0.0004],['k',0.0001]
                    ,['z',0.00006],['q',0],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "c" || letter == "C")
    {
        AlphaBeta = [['o',0.19],['a',0.15],['h',0.12],['e',0.11],['t',0.08],['i',0.08]
                    ,['k',0.07],['r',0.06],['u',0.05],['l',0.04],['c',0.02],['y',0.01]
                    ,['s',0.01],['q',0.002],['d',0.0006],['g',0.0003],['m',0.0003]
                    ,['n',0.0003],['z',0.0003],['b',0.0002],['v',0.00006]
                    ,['w',0.00006],['f',0.00003],['p',0.00003],['j',0],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "d" || letter == "D")
    {
        AlphaBeta = [['e',0.31],['i',0.23],['o',0.07],['a',0.07],['s',0.06],['r',0.05]
                    ,['u',0.05],['l',0.85],['d',0.03],['g',0.02],['y',0.02],['m',0.008]
                    ,['w',0.007],['n',0.006],['v',0.006],['b',0.006],['h',0.004]
                    ,['j',0.004],['c',0.004],['f',0.004],['p',0.002]
                    ,['t',0.002],['k',0.0004],['q',0.0002],['z',0.0002],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "e" || letter == "E")
    {
        AlphaBeta = [['r',0.2],['s',0.19],['d',0.13],['n',0.11],['l',0.05],['a',0.05]
                    ,['t',0.05],['c',0.04],['m',0.03],['e',0.02],['p',0.02],['x',0.01]
                    ,['v',0.01],['g',0.01],['f',0.01],['i',0.01],['o',0.009]
                    ,['w',0.008],['b',0.008],['y',0.007],['u',0.006]
                    ,['h',0.004],['q',0.003],['k',0.002],['z',0.001],['j',0.001]];
        return(AlphaBeta);
    }
    else if (letter == "f" || letter == "F")
    {
        AlphaBeta = [['i',0.19],['o',0.13],['e',0.13],['l',0.11],['a',0.1],['u',0.09]
                    ,['f',0.09],['r',0.08],['t',0.04],['y',0.03],['s',0.01],['b',0.0009]
                    ,['c',0.0009],['m',0.0009],['h',0.0007],['n',0.0007],['g',0.0006]
                    ,['d',0.0004],['p',0.0004],['w',0.0004],['j',0.0002]
                    ,['k',0.0002],['q',0],['v',0],['x',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "g" || letter == "G")
    {
        AlphaBeta = [['e',0.2],['r',0.12],['i',0.12],['a',0.11],['l',0.08],['h',0.07]
                    ,['o',0.06],['u',0.06],['s',0.05],['g',0.04],['n',0.04],['y',0.02]
                    ,['m',0.01],['t',0.005],['b',0.003],['w',0.003],['f',0.002]
                    ,['d',0.001],['p',0.001],['c',0.0006],['k',0.0003]
                    ,['z',0.0003],['j',0.00006],['q',0],['v',0],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "h" || letter == "H")
    {
        AlphaBeta = [['e',0.25],['a',0.18],['i',0.17],['o',0.16],['y',0.04],['u',0.04]
                    ,['t',0.04],['r',0.04],['s',0.02],['l',0.02],['m',0.01],['n',0.009]
                    ,['b',0.006],['w',0.006],['f',0.004],['d',0.002],['p',0.002]
                    ,['c',0.001],['h',0.001],['g',0.0006],['k',0.0006]
                    ,['j',0.0001],['q',0.0001],['v',0.00006],['x',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "i" || letter == "I")
    {
        AlphaBeta = [['n',0.25],['s',0.12],['c',0.08],['o',0.08],['t',0.08],['e',0.06]
                    ,['l',0.05],['a',0.04],['m',0.03],['d',0.03],['z',0.03],['v',0.03]
                    ,['r',0.03],['g',0.03],['p',0.02],['f',0.02],['b',0.02]
                    ,['u',0.004],['k',0.003],['x',0.003],['q',0.002]
                    ,['i',0.0007],['h',0.0005],['j',0.0004],['w',0.0003],['y',0.0001]];
        return(AlphaBeta);
    }
    else if (letter == "j" || letter == "J")
    {
        AlphaBeta = [['u',0.3],['o',0.23],['a',0.22],['e',0.19],['i',0.06],['p',0.0006]
                    ,['r',0.0006],['b',0],['c',0],['d',0],['f',0],['g',0]
                    ,['h',0],['j',0],['k',0],['l',0],['m',0]
                    ,['n',0],['q',0],['s',0],['t',0]
                    ,['v',0],['w',0],['x',0],['y',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "k" || letter == "K")
    {
        AlphaBeta = [['e',0.33],['i',0.21],['s',0.13],['a',0.06],['l',0.06],['n',0.04]
                    ,['y',0.03],['o',0.02],['b',0.02],['h',0.01],['r',0.01],['w',0.01]
                    ,['u',0.01],['m',0.01],['c',0.005],['d',0.005],['k',0.004]
                    ,['g',0.002],['j',0.001],['f',0.0007],['p',0.0007]
                    ,['t',0.0007],['q',0],['v',0],['x',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "l" || letter == "L")
    {
        AlphaBeta = [['e',0.22],['a',0.14],['y',0.13],['i',0.12],['l',0.12],['o',0.1]
                    ,['u',0.04],['s',0.04],['t',0.02],['d',0.02],['k',0.008],['m',0.007]
                    ,['c',0.007],['v',0.007],['p',0.007],['f',0.006],['g',0.004]
                    ,['b',0.004],['n',0.004],['w',0.002],['r',0.002]
                    ,['h',0.001],['z',0.0002],['q',0.0002],['j',0.0001],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "m" || letter == "M")
    {
        AlphaBeta = [['e',0.2],['a',0.19],['i',0.18],['o',0.12],['p',0.1],['b',0.06]
                    ,['m',0.05],['u',0.04],['s',0.04],['y',0.01],['n',0.01],['l',0.005]
                    ,['c',0.004],['f',0.003],['r',0.0009],['v',0.0009],['w',0.0009]
                    ,['d',0.0005],['h',0.0005],['t',0.0005],['g',0.0003]
                    ,['k',0.0002],['j',0.00009],['q',0.00009],['x',0.00009],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "n" || letter == "N")
    {
        AlphaBeta = [['g',0.21],['t',0.13],['e',0.12],['s',0.1],['i',0.08],['d',0.08]
                    ,['a',0.07],['c',0.06],['o',0.04],['n',0.02],['f',0.02],['u',0.01]
                    ,['k',0.01],['v',0.009],['l',0.006],['y',0.006],['h',0.005]
                    ,['b',0.005],['p',0.004],['r',0.004],['m',0.004]
                    ,['w',0.003],['j',0.002],['q',0.002],['z',0.001],['x',0.0006]];
        return(AlphaBeta);
    }
    else if (letter == "o" || letter == "O")
    {
        AlphaBeta = [['n',0.21],['r',0.14],['u',0.08],['l',0.07],['m',0.06],['s',0.05]
                    ,['t',0.05],['o',0.04],['p',0.04],['g',0.03],['c',0.03],['v',0.03]
                    ,['w',0.03],['d',0.03],['b',0.02],['i',0.02],['a',0.02]
                    ,['q',0.01],['k',0.01],['e',0.009],['f',0.009]
                    ,['x',0.006],['y',0.006],['h',0.003],['z',0.002],['j',0.0008]];
        return(AlphaBeta);
    }
    else if (letter == "p" || letter == "P")
    {
        AlphaBeta = [['e',0.18],['r',0.14],['a',0.12],['o',0.12],['i',0.1],['l',0.08]
                    ,['h',0.08],['p',0.05],['u',0.05],['s',0.04],['t',0.04],['y',0.009]
                    ,['m',0.003],['b',0.002],['n',0.002],['c',0.001],['f',0.001]
                    ,['w',0.001],['d',0.0009],['k',0.0009],['g',0.0004]
                    ,['j',0.0002],['z',0.00004],['q',0],['v',0],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "q" || letter == "Q")
    {
        AlphaBeta = [['u',0.99],['a',0.001],['i',0.001],['l',0.001],['t',0.001],['c',0.0006]
                    ,['d',0.0006],['e',0.0006],['m',0.0006],['o',0.0006],['p',0.0006],['r',0.0006]
                    ,['b',0],['f',0],['g',0],['h',0],['j',0]
                    ,['k',0],['n',0],['q',0],['s',0]
                    ,['v',0],['w',0],['x',0],['y',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "r" || letter == "R")
    {
        AlphaBeta = [['e',0.2],['i',0.15],['a',0.15],['o',0.1],['s',0.1],['t',0.04]
                    ,['u',0.03],['d',0.03],['r',0.03],['m',0.03],['y',0.02],['n',0.02]
                    ,['c',0.02],['g',0.02],['b',0.01],['l',0.01],['p',0.01]
                    ,['k',0.01],['v',0.008],['f',0.006],['h',0.005]
                    ,['w',0.004],['j',0.0007],['q',0.0005],['z',0.0002],['x',0.00009]];
        return(AlphaBeta);
    }
    else if (letter == "s" || letter == "S")
    {
        AlphaBeta = [['t',0.21],['e',0.15],['s',0.1],['i',0.1],['h',0.07],['c',0.05]
                    ,['a',0.05],['u',0.05],['p',0.05],['o',0.05],['l',0.03],['m',0.03]
                    ,['n',0.01],['y',0.01],['k',0.01],['w',0.01],['q',0.006]
                    ,['b',0.004],['f',0.003],['r',0.002],['d',0.002]
                    ,['g',0.002],['j',0.0007],['v',0.0005],['z',0.00005],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "t" || letter == "T")
    {
        AlphaBeta = [['i',0.24],['e',0.22],['a',0.1],['r',0.09],['o',0.08],['s',0.07]
                    ,['h',0.06],['u',0.04],['t',0.04],['y',0.03],['l',0.02],['c',0.01]
                    ,['m',0.005],['f',0.004],['n',0.003],['b',0.002],['z',0.002]
                    ,['p',0.001],['g',0.001],['d',0.0006],['w',0.0006]
                    ,['k',0.0002],['v',0.0002],['j',0.00008],['x',0.00002],['q',0]];
        return(AlphaBeta);
    }
    else if (letter == "u" || letter == "U")
    {
        AlphaBeta = [['n',0.17],['r',0.13],['s',0.13],['l',0.1],['t',0.08],['m',0.07]
                    ,['a',0.04],['c',0.04],['i',0.04],['e',0.04],['p',0.04],['b',0.03]
                    ,['d',0.03],['g',0.03],['f',0.01],['o',0.008],['v',0.004]
                    ,['x',0.004],['z',0.003],['k',0.003],['y',0.001]
                    ,['u',0.0007],['j',0.0004],['h',0.0002],['w',0.0002],['q',0.0002]];
        return(AlphaBeta);
    }
    else if (letter == "v" || letter == "V")
    {
        AlphaBeta = [['e',0.5],['i',0.21],['a',0.15],['o',0.08],['y',0.04],['u',0.01]
                    ,['r',0.003],['v',0.002],['s',0.001],['l',0.0005],['n',0.0002],['c',0.0001]
                    ,['d',0.0001],['b',0],['f',0],['g',0],['h',0]
                    ,['j',0],['k',0],['m',0],['p',0]
                    ,['q',0],['t',0],['w',0],['x',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "w" || letter == "W")
    {
        AlphaBeta = [['a',0.22],['e',0.17],['i',0.17],['o',0.13],['h',0.07],['s',0.05]
                    ,['n',0.05],['r',0.04],['l',0.03],['d',0.02],['b',0.01],['k',0.008]
                    ,['y',0.008],['f',0.006],['m',0.005],['p',0.005],['t',0.005]
                    ,['c',0.003],['g',0.002],['u',0.002],['w',0.001]
                    ,['z',0.001],['q',0.0002],['j',0],['v',0],['x',0]];
        return(AlphaBeta);
    }
    else if (letter == "x" || letter == "X")
    {
        AlphaBeta = [['i',0.19],['p',0.17],['e',0.16],['t',0.16],['c',0.09],['a',0.07]
                    ,['o',0.04],['h',0.04],['u',0.03],['y',0.03],['f',0.005],['l',0.005]
                    ,['v',0.005],['w',0.005],['x',0.005],['m',0.004],['b',0.003]
                    ,['s',0.002],['q',0.002],['g',0.0009],['n',0.0005]
                    ,['d',0],['j',0],['k',0],['r',0],['z',0]];
        return(AlphaBeta);
    }
    else if (letter == "y" || letter == "Y")
    {
        AlphaBeta = [['s',0.15],['i',0.09],['p',0.09],['e',0.08],['m',0.08],['n',0.07]
                    ,['a',0.06],['l',0.06],['c',0.05],['r',0.05],['o',0.04],['t',0.04]
                    ,['d',0.04],['b',0.02],['w',0.02],['g',0.02],['f',0.008]
                    ,['h',0.008],['z',0.008],['u',0.006],['x',0.004]
                    ,['j',0.002],['k',0.002],['v',0.002],['q',0],['y',0]];
        return(AlphaBeta);
    }
    else if (letter == "z" || letter == "Z")
    {
        AlphaBeta = [['e',0.5],['i',0.2],['a',0.12],['z',0.07],['o',0.04],['l',0.03]
                    ,['y',0.02],['u',0.01],['t',0.006],['b',0.003],['v',0.002],['m',0.002]
                    ,['w',0.001],['h',0.0006],['k',0.0006],['p',0.0006],['r',0.0006]
                    ,['d',0.0003],['g',0.0003],['s',0.0003],['c',0]
                    ,['f',0],['j',0],['n',0],['1',0],['x',0]];
        return(AlphaBeta);
    }
}

console.log(AlphaBeta[0]);
