-- Each query is part of a small story that unfolds as you solve more.
-- I put between [...] a small description of how the story should go to not
-- forget.

--- SIMPLE QUERIES -------------------------------------------------------------
-- We start by introducing just the vinyl table and ask to write a couple of
-- simple queries. These get boring fast so it's not more than 3/4.
--
-- Takeaways:
--   - (1) Never use `*`, we want to be explicit and make it easy to see what is
--     going on. `*` means that if a table changes in the future our query will
--     change without us noticing! And we usually select way more data than we
--     actually need
--   - (1) Be explicit! We could omit `asc` but it makes it harder to understand
--     how the result is sorted, we're not here to type as little as possible;
--     we're here to write queries that are easy to read and maintain.
--     Let's save a couple of precious brain cycles and use `asc` instead of
--     relying on some implicit magic.
--   - (2) SQL is code, and code is formatted nicely. Don't try and cram as much
--     as possible into a single line!
--   - (3) Nothing much to add.
--
-- Main takeaway:
--   - SQL is code! Treat it as such.
--

-- Table creation and seeding.
--
create table vinyl(
    vinyl_id bigserial primary key,
    author text not null,
    title text not null,
    total_duration int not null
);

insert into vinyl(vinyl_id, author, title, total_duration) values
    (1, 'Sabrina Carpenter', 'Nonsense', 350),
    (2, 'Michael Bublé', 'Christmas', 3550),
    (3, 'Stephen Schwarz', 'Wicked', 3300),
    (4, 'Sabrina Carpenter', 'Short ''n Sweet', 2181);


-- 1. All vinyls and durations in alphabetical order.
--
-- [Lucy wants to have a list of all the vinyls in her collection]
--
select title, total_duration
from vinyl
order by title asc;

-- 2. All vinyls and minutes-seconds duration in alphabetical order.
--
-- [Not really readable a duration in seconds, let's format it in minutes and
-- seconds]
--
select
    title,
    total_duration / 60 as minutes,
    total_duration % 60 as seconds
from vinyl
order by title asc;

-- 3. Shortest vinyl lasting more than 30 minutes.
--
-- [Phew, now I can get some rest before the dinner party I'm hosting tonight.
-- I have right about half an hour before I should start preparing]
--
select title
from vinyl
where total_duration / 60 >= 30
order by total_duration asc
limit 1;

--- INTERMEDIATE QUERIES -------------------------------------------------------
-- We can now introduce a second table: `track`, it keeps track (pun intended)
-- of the tracks of each vinyl. This will allow us to move to more elaborate
-- queries with joins, groupings and such.
--
-- Takeaways:
--   - (4) Risking being repetitive, SQL. IS. CODE. I doubt you would ever allow
--     code using inscrutable single letter variables to pass a code review.
--     So the same goes for SQL! When joining NEVER - I repeat - NEVER use
--     single letter abbreviations: it saves you some typing but makes the
--     code reading an absolute agony.
--   - (4) When joining use... `join`! In the past we might have put the join
--     condition in a where clause, that's not great. We want to show our intent
--     as clearly as possible, and our intent is joining two tables
--   - (4) `using` makes for really nice queries. Use it whenever possible.
--     An id should have a globally unique name and most of the times when we
--     import it we don't change its name so `using` is real handy in those very
--     frequent occasions.
--   - (4) Always qualify a column when you're working with more than a single
--     table: even if SQL is smart enough to disambiguate the column
--     automatically, we humans aren't!! (And don't forget code is meant to be
--     read by humans primarily).
--     If a column is not preceded by the name of it's table we either already
--     know where it comes from (unlikely), or we have to look it up to make
--     sure it's really what we meant to do.
--   - (5) Be explicit about the name you want to give columns, don't rely on
--     automatic naming done by the DBMS. SQL queries are the API with which we
--     talk to a database and we always want to be intensional about the design
--     of an API. That also includes choosing the appropriate names for the data
--     it returns upon interrogation.

-- 4. All the vinyls with their respective number of tracks.
--    With the one with the most tracks on top.
--
-- [... not really sure how I get here in the story... Duration is useful and
-- all but it's not the whole story when picking a vinyl to listen to... I also
-- want to know what songs are there!
-- First let's start by just counting those and get a sense of how those are
-- distributed.
-- ]
--
select
    vinyl.title,
    count(*) as tracks
from
    vinyl
    join track using(vinyl_id)
group by vinyl.id
order by tracks desc;

-- 5. Change the previous query to have the average track duration
--    And now you want the one with the shortest average duration first.
--
-- [
-- I don't want to pick a vinyl that has songs that go on for too long...
-- Maybe I could change the query and discover how long each song is on
-- average! That would make for an interesting piece of trivia.]
--
select
    vinyl.title,
    vinyl.total_duration / count(*) as average_duration
from
    vinyl
    join track using(vinyl_id)
group by vinyl.vinyl_id
order by average_duration asc;

-- 6. Find the three vinyls that last the most and each have at least
--    10 tracks and last more than 50 minutes.
--
-- [I will need some background music for tonight's dinner party, it could go
-- on for a while so I'll need to find the vinyls that last the longest.
-- But it also needs some variety, I don't want to have three really boring
-- really long songs. Let's say each vinyl should have at least ten tracks,
-- that should be a good starting point]
--
select vinyl.title
from
    vinyl
    join track using(vinyl_id)
group by vinyl.vinyl_id
having count(*) >= 10
order by total_duration desc
limit 3;

-- 7. Same as above but filter out any vinyl from ACDC.
--
-- [Maybe rock music is not the best background music for a chill dinner party,
-- let's filter that out.]
--
select vinyl.title
from
    vinyl
    join track using(vinyl_id)
where vinyl.author <> 'ACDC'
group by vinyl.vinyl_id
having count(*) >= 10
order by total_duration desc
limit 3;

-- 8. Find the name of the vinyl from X containing the Y track.
--
-- [The dinner party begins. I'm turning into shazam: do you remember the name
-- of that album where X was singing Y? Ooh I have that on the tip of my tongue!
-- Lucy pulls out her database, confident she owns that vinyl and starts looking
-- for it.]
--
select vinyl.title
from
    vinyl
    join track using(vinyl_id)
where
    vinyl.author = 'X'
    and track.title = 'Y';

-- 9. Select all the vinyls that have a number of tracks above the average.
--    And you want the one with the most tracks on top.
--
-- [Lucy's friends are quite impressed with that and try coming up with harder
-- questions trying to test Lucy's skills. Just friendly banter]
--
with tracks_count as (
    select
        vinyl.title,
        count(*) as tracks
    from vinyl
    group by vinyl.vinyl_id
)
select title, tracks
from tracks_count
where tracks > (
    select avg(tracks)
    from tracks_count
)
order by tracks desc;

-- COMPLEX QUERIES -------------------------------------------------------------
-- We introduce another table: one to record all the times Lucy listened to
-- something. This will allow to make
--

--
-- [Lucy's jealus of her friends boasting about theyr Spotify wrapped.
-- Only listening to vinyls really has some drawbacks!
-- She's gonna make her own. Ideas for queries:
--
--  - most listened album
--  - most listened singer
--  - the top 3 songs she has never skipped
--  - favourite genre
--  - least favourite song
--  - things to explore in the next year: the albums she bought but never even
--    listened to!
--
-- ]
--
--
