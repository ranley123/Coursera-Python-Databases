#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jan 10 00:16:01 2019

@author: ranley
"""

import sqlite3

conn = sqlite3.connect("exercise2.sqlite")
cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS Counts')
cur.execute('''CREATE TABLE Counts (org TEXT, count INTEGER)''')

fname = input('Enter file name: ')
if (len(fname) < 1): fname = 'mbox-short.txt'
data = open(fname)

    

for line in data:
    if not line.startswith('From: '): 
        continue
    
    pieces = line.split()
    org = pieces[1].split('@')[1]
    cur.execute('SELECT count FROM Counts WHERE org = ?', (org,))
    row = cur.fetchone()
    if row is None:
        cur.execute('INSERT INTO Counts (org, count) VALUES (?, 1)', (org,))
    else:
        cur.execute('UPDATE Counts SET count = count + 1 WHERE org = ?', (org, ))
    
    
conn.commit()
command = 'SELECT org,count FROM Counts ORDER BY count DESC LIMIT 10'
    
for row in cur.execute(command):
    print(str(row[0]), row[1])
        
cur.close()