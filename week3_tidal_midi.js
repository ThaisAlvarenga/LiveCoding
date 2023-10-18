-- beat
d1 $ sound "[<808bd:4(3,8) 808bd:4(5,8) 808bd:4(3,8) 808bd:4>, ~ 808:3]" # room 0.95 # krush 9 # speed (slow 4 ("<1.5 1>"))

-- hydra noise value
-- ccv are the values we're sending, they need to be between 0 and 127 inclusive
-- ccn is the cc number, the "connector" or "route" we will send things through
d2 $ ccv "0 20 64 127" # ccn "0" # s "midi"

-- can be simple!
d2 $ ccv "<127 0 127 0>" # ccn "0" # s "midi"

-- use segment to break up the conituous pattern into 128 divisions
-- to get get a smooth saw wave for the ccv
d2 $ ccv (segment 128 (range 127 0 saw)) # ccn "0" # s "midi"

-- adjust every cycle with saw wave with every 4 cycles double speed
d2 $ rotL 1 $ every 4 (# ccv (fast 2 (range 127 0 saw))) $ ccv (segment 128 (range 127 0 saw)) # ccn "0"  # s "midi"

-- adding the euclidean rhythm

-- making a euclidean rhythm be all the way on or off
d2 $ ccv (stitch "<t(3,8) t(5,8) t(3,8) [t f]>" 127 0) # ccn 0 # s "midi"
-- contrast that with combining with a conituous osc
d2 $ struct "<t(3,8) t(5,8) t(3,8) t*2>" $ ccv ((segment 128 (range 127 0 saw))) # ccn "0" # s "midi"

-- combine the two with two different outs and then add together in hydra
-- this one sends to cc number 2
d2 $ rotL 1 $ every 4 (# ccv (fast 2 (range 64 0 saw))) $ ccv (segment 128 (range 64 0 saw)) # ccn "0" # s "midi"
d3 $ struct "<t(3,8) t(5,8) t(3,8) t>" $ ccv (segment 128 (slow 4 (range 100 0 saw))) # ccn "1" # s "midi"

-- hydra luma value (control something else)
d4 $ ccv (segment 128 (slow 4 (range 127 0 saw))) # ccn "2" # s "midi"

-- reset noise
d2 $ ccv "0*128" # ccn "0" # s "midi"
d3 $ ccv "0*128" # ccn "1" # s "midi"
-- reset luma
d4 $ ccv "64*128" # ccn "2" # s "midi"

hush
d1 silence
d2 silence
d3 silence
d4 silence
