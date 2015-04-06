import sys, re

#finds instances of onclick in html file, rips to a new file and removes from the input
path = sys.argv[1]
infile = open(path, 'r')
outfile = open("listeners.js", 'w')
clickpatt = re.compile(r'''onclick=['"]javascript:([^()"';]+)''')
idpatt = re.compile(r'''id=["']([^"']+)''')

for line in infile:
	clickmatch = re.search(clickpatt, line)
	if clickmatch:
		idmatch = re.search(idpatt, line)
		idname = idmatch.group(1)
		funcname = clickmatch.group(1)	
		outfile.write("$('#"+idname+"').click("+funcname+');\n')

infile.close()
outfile.close()